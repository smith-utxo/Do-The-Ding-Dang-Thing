const db = require("../config/connection");
const {userGen, reviewGen, serviceGen} = require('./seedGen')
const { User, Review, Service } = require("../models");


db.once("open", async () => {
  try {
    //deletes existing users, reviews, and services
    await User.deleteMany({});
    console.log("Users deleted");
    await Review.deleteMany({});
    console.log("Reviews deleted");
    await Service.deleteMany({});
    console.log("Services deleted");
    console.log('-----------------------------------');

    //generates the users 
    const users = await userGen();
    
    //creates the user, review, and services seed data
    await User.create(users);
    console.log("\nUsers created");
    await Review.create(reviewGen(users));
    console.log("Reviews created");
    await Service.create(serviceGen(users));
    console.log("Services created");
    
  } catch (err) {
    console.error(err);
    process.exit(1);
  }

  console.log("\nSuccessfully seeded database!");
  process.exit(0);
});