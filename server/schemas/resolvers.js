const { Service, User, Review } = require("../models");
const { gql, AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id }).select(
          "-__v -password"
        );
        return userData;
      }
      throw new AuthenticationError("Not logged in");
    },
    //TO DO: use the service id to look for it inside all the user services arrays... the reverse of bonus in project 18 ... use the mongoose $
    //services:
  },

  Mutation: {
    addUser: async (parent, args) => {
        console.log('inside add user')
      const user = await User.create(args);
      console.log(args)
      const token = signToken(user);

      //TO DO: add token back when ready to use
      return { user, token };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

    //  const token = signToken(user, token);
      return { user };
    },

    //TO DO: This needs to be fixed
    addReview: async (parent, args, context) => {
      console.log(context);
      //only allows logged in users to leave reviews
      if (context.user) {
        const review = await Review.create({
          ...args,
          _id: context.service._id,
        });

        await Service.findByIdAndUpdate(
          { _id: context.service._id },
          { $push: { reviews: review } },
          { new: true }
        );

        return review;
      }
      throw new AuthenticationError("You need to be logged in!");
    },

    addService: async (parent, { serviceId }, context) => {
        if (context.user) {
            const updatedUser = await User.findOneAndUpdate(
                {_id: context.user_id},
                {$addToSet: {service: serviceId}},
                {new: true}
            ).populate('service')

            return updatedUser;
        }

        throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
