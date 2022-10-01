const { Service, User, Review } = require('../models')
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
        },
        //TO DO: use the service id to look for it inside all the user services arrays... the reverse of bonus in project 18 ... use the mongoose $
        //services: 
    },

    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            //const token = signToken(user);

                //TO DO: add token back when ready to use
            return { user };
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

        //TO DO: This needs to be fixed
        addReview: async (parent, {serviceId}, args) => {
            //only allows logged in users to leave reviews
            if (context.user) {
              const review = await Review.create({ ...args, username: context.user.username });
      
              await Service.findByIdAndUpdate(
                { _id: context.service._id },
                { $push: { review: review._id } },
                { new: true }
              );
      
              return review;
            }
      
            throw new AuthenticationError('You need to be logged in!');
          },

        addService: {
            // TO DO: have it link to a dropdown with pre-determined job options
            //then the service goes to the user's array

        }
    }
}