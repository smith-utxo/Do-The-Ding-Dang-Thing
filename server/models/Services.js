const { Schema } = require('mongoose');

//subdocument schema, it won't become its own model but we'll use it as the schma for the User's 'services' array in User.js
const servicesSchema = new Schema (
    {
        descripton: {
            type: String,
            required: true,
            maxLength: 150
        }
    },
);

modules.export = servicesSchema;