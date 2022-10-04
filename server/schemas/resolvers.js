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
        // Get all users
        users: async () => {
            return await User.find();
        },
        // Get a single user and list their services
        user: async (parent, { username }) => {
            return User.findOne({ username })
                .select('-__v -password')
                .populate('services')
                .populate('reviews');
        },
        // Get all services, used for seeding database
        services: async () => {
            return await Service.find();
        },
        // Get one service and list its users and reviews
        providers: async (parent, { _id }) => {
            return await Service.find({ _id })
            .populate('users');
        },
        reviews: async () => {
          return await Review.find();
        }, 
    },
    
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
                
            return { token, user };
        },
        login: async (parent, { email, password }) => {
            const user = await User.findOne({ email });
            if (!user) {
                throw new AuthenticationError('Incorrect user');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect password');
            }

            const token = signToken(user);
            return { token, user };
        },

        addReview: async(parent, {reviewData}, context) => {
            console.log(reviewData)
            if (context.user) {
                const review = await Review.create({...reviewData, username: context.user.username});

                await User.findByIdAndUpdate(
                    {_id: context.user._id},
                    { $push: { reviews: review._id } },
                    { new: true }
                );

                return review;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
    },

};

module.exports = resolvers;