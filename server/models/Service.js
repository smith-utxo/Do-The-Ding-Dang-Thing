const { model, Schema } = require('mongoose');


const servicesSchema = new Schema(

    {
        //create and array because they may do more than one job.
        title:{
            type: String
        },
        description: {
            type: String,
            required: true,
            maxLength: 150
        },
        reviews: [{
            type: Schema.Types.ObjectId,
            ref: 'Review'
        }]
    },
    //could keep this to track reviews
    {
        toJSON: {
            virtuals: true,
        },
    }
);

const Service = model('Service', servicesSchema);

module.exports = Service;