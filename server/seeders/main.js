const { faker } = require("@faker-js/faker");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
// const fs = require('fs');
const { User, Review, Service } = require("../models");
let users = [];
let reviews = [];

// Per module 18
mongoose
  .connect(
    process.env.MONGODB_URI ||
      "mongodb://127.0.0.1:27017/do-the-ding-dang-thing",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to Mongo!");
  })
  .catch((err) => {
    console.error("Error connecting to Mongo", err);
  });

function generateData() {
    // Generate 100 random users that fit the User model
  function generateUsers() {
    const serviceArray = [
      {
        title: "Cleaning",
        description: "Houses, stores, cars... whatever's dirty, someone out there can clean it for you."
      },
      {
        title: "Electrical",
        description: "One of these skilled electricians might spark your interest!"
      },
      {
        title: "Lawn and Garden",
        description: "These green-thumbed gurus keep the great outdoors looking great!"
      },
      {
        title: "Plumbing",
        description: "These pipemasters will help you achieve a state of flow again."
      },
      {
        title: "Web Development",
        description: "Taking your business global? They're here to help."
      },
    ];

    const seedServiceDB = async () => {
      await Service.deleteMany({});
      await Service.insertMany(serviceArray);
    };
    seedServiceDB().then(() => {
      console.log("Successfully seeded services!");
    });

    for (let i = 0; i < 50; i++) {
      let username = faker.internet.userName();
      let email = faker.internet.email(`${username}`);
      let password = faker.internet.password(12);
      let phone = faker.phone.number("###-###-####");
      let services =
        serviceArray[
          Math.floor(Math.random() * (serviceArray.length - 0 + 1) + 1)
        ];

      users.push({
        username: username,
        email: email,
        password: password,
        phone: phone,
        services: services,
      });
    }
    console.log(users);
    return users;
  }

  generateUsers();
  // Generate 20 random reviews that follow made by some of the users just created
  function generateReviews() {
    for (let i = 0; i < 20; i++) {
      let reviewBody = faker.lorem.sentences(2);
      let username = users[Math.floor(Math.random() * users.length)].username;
      // console.log(username);
      let createdAt = faker.date.recent();
      let rating = Math.floor(Math.random() * (5 - 1 + 1) + 1);

      reviews.push({
        reviewBody: reviewBody,
        username: username,
        createdAt: createdAt,
        rating: rating,
      });
    }

    return reviews;
  }

  generateReviews();
}

generateData();
// console.log(users);
// console.log(reviews);

const seedDB = async () => {
  await User.deleteMany({});
  await User.insertMany(users);
  await Review.deleteMany({});
  await Review.insertMany(reviews);
};

seedDB().then(() => {
  console.log("Successfully seeded database!");
});
// fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));