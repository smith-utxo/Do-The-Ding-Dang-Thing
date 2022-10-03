const { Service, User, Review } = require('../models')
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                const userData = await User.findOne({ _id: context.user._id })
                    .select('-__v -password')
                return (userData)
            }
            throw new AuthenticationError('Not logged in');
        },
        // Get a single user and list their services
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('services');
        },
        // Get all services, used for seeding database
        services: async () => {
            return await Service.find();
        },
        // Get one service and list its users and reviews
        providers: async (parent, { _id }) => {
            return await Service.findOne({ _id })
            .populate('users')
            .populate('reviews');
        },
    },
    
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);

                //TO DO: add token back when ready to use
            return { user, token };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            //const token = signToken(user);
            //return { token, user };
        },

        //TO DO: This needs to be fixed to send service id to args
        //could just send the _id over in place of args... it is not part of context anymore... that needs to go
        addReview: async(parent, args, context) => {
            if (context.user) {
                const review = await Review.create({...args, username: context.user.username});

                await Service.findByIdAndUpdate(
                    {_id: context.user._id},
                    { $push: { reviews: review._id } },
                    { new: true }
                );

                return review;
            }
            throw new AuthenticationError('You need to be logged in!');
        },

        addService: async (parent, { serviceId }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate(
                    {_id: context.user_id},
                    {$addToSet: {services: serviceId}},
                    {new: true}
                ).populate('services');
    
                return updatedUser;
            }
    
            throw new AuthenticationError('You need to be logged in!');
        },
    }
}

module.exports = resolvers;