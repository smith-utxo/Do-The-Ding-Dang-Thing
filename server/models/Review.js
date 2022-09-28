const { Schema } =require('mongoose');

const reviewSchema = new Schema(
    {
        reviewBody: {
            type: String,
            required: true,
            maxlength: 250
        },
        //do we need this to search by user?
        username: {
            type: String,
            required: true
        },
        rating: {
            type: Int,
            min: 1,
            max: 10,
            require: true
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

module.exports = reviewSchema;