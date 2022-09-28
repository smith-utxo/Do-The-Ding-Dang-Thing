const { Schema } = require('mongoose');

//subdocument schema, it won't become its own model but we'll use it as the schma for the User's 'services' array in User.js
const servicesSchema = new Schema (
    {
        //create and array because they may do more than one job.
        job: [
            {
                type: String
            }
        ],
        description: {
            type: String,
            required: true,
            maxLength: 150
        }
    },
);

modules.export = servicesSchema;