const { Schema } =require('mongoose');

const reviewSchema = new Schema(
    {
        reviewBody: {
            type: String,
            required: true,
            maxlength: 250
        },
        username: {
            type: String,
            required: true
        }
    },
    {
        toJSON: {
            getters: true
        }
    }
);

module.exports = reviewSchema;