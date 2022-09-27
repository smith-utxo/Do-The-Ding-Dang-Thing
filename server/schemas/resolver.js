const { Services, User } = require('../models')
const { gql } = require('apollo-server-express');
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
        }
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
                throw new AuthenticationError('Incorrect credentials');
            }

            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user);
            return { token, user };
        },
        addReview: async(parent, args, context) => {
            if (context.user) {
                const review = await Review.create({...args, username: context.user.username});

                await User.findByIdAndUpdate(
                    {_id: context.user._id},
                    { $push: { reviews: review._id } },
                    { new: true }
                );

                return review;
            }
            throw new AuthenticationError('You need to be logged in!');
        },
        // addService??
    }
}