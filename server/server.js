const express = require('express');
const mongoose = require('mongoose');
const { User , Service, Review} = require('./models');


mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/do-the-ding-dang-thing', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to Mongo!');
})
.catch((err) => {
  console.error('Error connecting to Mongo', err);
});

  // Create an empty array to store User Data 
  const userData = [
    {
      username: "Chris 'Iceman' Stallcup",
      email: "Need4Speed@gmail.com", 
      password: "123456",
      phone: "555-555-5555",
    }, 
    {
      username: "Charlie Werness", 
      email: "CharlesInCharge@gmail.com", 
      password: "iHeartTranspiling", 
      phone: "444-444-4444"
    }
  ];

  const serviceData = [
    {
      title: "Web Developer", 
      description: "I am a Ninja Level Web Dev who eats code for breakfast."
    }
  ];

    const reviewData = [
      {
        reviewBody: "Chris did an awesome job creating my website! Would highly recommend!",
        username: "JimBobJoe",
        rating: 5
      }, 
      {
        reviewBody: "Charlie did a fantastic job creating my website! Would recommend.",
        username: "SomeRandoGuy",
        rating: 5

      }
    ]
  const seedDB = async () => {
    await User.deleteMany({}); 
    await User.insertMany(userData)
    await Service.deleteMany({}); 
    await Service.insertMany(serviceData)
    await Review.deleteMany({}); 
    await Review.insertMany(reviewData)
  }

  seedDB().then(() => {
    console.log("successfully seeded database!"); 
  })

// Use this to log mongo queries being executed!
mongoose.set('debug', true);