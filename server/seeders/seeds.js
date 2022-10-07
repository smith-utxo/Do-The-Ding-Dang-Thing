const { faker } = require("@faker-js/faker");
const mongoose = require("mongoose");
const db = require('../config/connection');
const seedGen = require('./seedGen')
// const fs = require('fs');
const { User, Review, Service } = require("../models");

db.once('open mongodb connection', async () =>{
  try{
  await User.deleteMany({});
  await Review.deleteMany({});

  // await User.insertMany(users);
  // await Review.insertMany(reviews);
  await User.create(userSeeds);
  await Review.create(reviewSeeds);
  } catch (err){
    console.error(err);
    process.exit(1);
  }

  console.log('Successfully seeded database!');
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
