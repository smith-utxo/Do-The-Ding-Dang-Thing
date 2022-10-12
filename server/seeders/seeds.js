const { faker } = require("@faker-js/faker");
// const { User, Review, Service } = require("../models");
// ---------------------------------------------------------------
const db = require("../config/connection");
// const {userGen, reviewGen, serviceGen} = require('./seedGen')
// const fs = require('fs');
const { User, Review, Service } = require("../models");
// ----------------------------------------------------------------
// const userGen = () => {
//   const seedServiceDB = async () => {
//     await Service.insertMany(serviceArray);
//   };
//   seedServiceDB().then(() => {
//     console.log("Successfully seeded services!");
//   });

//   for (let i = 0; i < 50; i++) {
//     let username = faker.internet.userName();
//     let email = faker.internet.email(`${username}`);
//     let password = faker.internet.password(12);
//     let phone = faker.phone.number("###-###-####");
//     let services =
//       serviceArray[
//         Math.floor(Math.random() * (serviceArray.length - 0 + 1) + 1)
//       ];

//     users.push({
//       username: username,
//       email: email,
//       password: password,
//       phone: phone,
//       // services: services,
//     });
//   }
//   console.log(users);
//   return users;
// };

// const reviewGen = () => {
//   for (let i = 0; i < 20; i++) {
//     let reviewBody = faker.lorem.sentences(2);
//     let username = users[Math.floor(Math.random() * users.length)].username;
//     let createdAt = faker.date.recent();
//     let rating = Math.floor(Math.random() * (5 - 1 + 1) + 1);

//     reviews.push({
//       reviewBody: reviewBody,
//       username: username,
//       createdAt: createdAt,
//       rating: rating,
//     });
//   }

//   return reviews;
// };

// const serviceGen = () => {
//   for (let i = 0; i < 20; i++) {
//     let reviewBody = faker.lorem.sentences(2);
//     let username = users[Math.floor(Math.random() * users.length)].username;
//     let createdAt = faker.date.recent();
//     let rating = Math.floor(Math.random() * (5 - 1 + 1) + 1);

//     reviews.push({
//       reviewBody: reviewBody,
//       username: username,
//       createdAt: createdAt,
//       rating: rating,
//     });
//   }

//   return reviews;
// };
db.once("open", async () => {
  try {
    await User.deleteMany({});
    console.log("Users deleted");
    // await Review.deleteMany({});
    // await Service.deleteMany({});
    // await User.insertMany(users);
    // await Review.insertMany(reviews);

    // await User.create(userGen);
    // await Review.create(reviewGen);
    // await Service.create(serviceGen);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("Successfully seeded database!");
  process.exit(0);
});

// const seedDB = async () => {
//   await User.deleteMany({});
//   await User.insertMany(users);
//   await Review.deleteMany({});
//   await Review.insertMany(reviews);
// };

// seedDB().then(() => {
//   console.log("Successfully seeded database!");
//   process.exit(0);
// });
// fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));
