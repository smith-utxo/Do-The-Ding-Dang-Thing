const { model, Schema } = require('mongoose');


const serviceSchema = new Schema(

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
    },
    //could keep this to track reviews
    {
        toJSON: {
            virtuals: true,
        },
    }
);

const Service = model('Service', serviceSchema);
 
module.exports = Service;