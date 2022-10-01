const { faker } = require("@faker-js/faker");
const mongoose = require("mongoose");
// const fs = require('fs');
const { User, Review } = require("../models");
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
  function generateUsers() {
    const serviceArray = [
      "Cleaning",
      "Electrical",
      "Lawn & Garden",
      "Plumbing",
      "Web Development",
    ];
    for (let i = 0; i < 50; i++) {
      let username = faker.internet.userName();
      let email = faker.internet.email();
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
        services: [services],
      });
    }

    return users;
  }

  generateUsers();

  function generateReviews() {
    for (let i = 0; i < 20; i++) {
      let reviewBody = faker.lorem.sentences(2);
      let username = users[Math.floor(Math.random() * users.length)].username;
      console.log(username);
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
console.log(users);
console.log(reviews);

const seedDB = async () => {
  await User.deleteMany({});
  await User.insertMany(users);
  await Review.deleteMany({});
  await Review.insertMany(reviews);
};

seedDB().then(() => {
  console.log("successfully seeded database!");
});
// fs.writeFileSync('data.json', JSON.stringify(dataObj, null, '\t'));