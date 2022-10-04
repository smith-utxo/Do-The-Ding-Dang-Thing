const { Schema, model } = require('mongoose');

const reviewSchema = new Schema(
    {
        reviewBody: {
            type: String,
            required: true,
            maxlength: 250
        },
        //this is the username of the user leaving the review
        username: {
            type: String,
            required: true
        },
        //TO DO: 
        createdAt: {
            type: Date,
            default: Date.now,
            //get: timestamp => dateFormat(timestamp)
          },

        rating: {
            type: Number,
            minlength: 1,
            maxlength: 5,
            require: true
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

const Review = model('Review', reviewSchema)

module.exports = Review;