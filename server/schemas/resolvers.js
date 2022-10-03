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
    services: async () => {
      return await Service.find();
    },
    // providers: async (parent, { service, user }) => {
    //     const params = {};

    //     if (service) {
    //         params.service = service;
    //     }

    //     return await User.find(params).populate('service');
    // },
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
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      //const token = signToken(user);
      return { user };
    },

    addReview: async (parent, { serviceId, reviewBody }, context) => {
      if (context.user) {
        const review = await Review.findOneAndUpdate(
          { _id: serviceId },
          {
            $push: { reviews: { reviewBody, username: context.user.username } },
          },
          { new: true, runValidators: true }
        );

        return review;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
    addService: async (parent, { serviceId }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user_id },
          { $addToSet: { service: serviceId } },
          { new: true }
        ).populate("service");

        return updatedUser;
      }

      throw new AuthenticationError("You need to be logged in!");
    },
  },
};

module.exports = resolvers;

//trying this one 10/1
// addReview: async (parent, {serviceID}, context) => {
//   if (context.user) {
//     const review = await Review.create({
//       ...args,
//       username: context.user.username,
//     });

//     await Service.findByIdAndUpdate(
//       { _id: context.user._id },
//       { $push: { reviews: review._id } },
//       { new: true }
//     );

//     return review;
//   }
//   throw new AuthenticationError("You need to be logged in!");
// }
//   addService: async (parent, args, context) => {
//     if (context.user) {
//       const service = await Service.create({
//         ...args,
//         username: context.user.username,
//       });

//       await User.findByIdAndUpdate(
//         { _id: context.user._id },
//         { $push: { service: service._id } },
//         { new: true }
//       );

//       return service;
//     }

//     throw new AuthenticationError("You need to be logged in!");
//   },
// };
