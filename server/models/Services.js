const { Schema } = require('mongoose');

const servicesSchema = new Schema (
    {
        servicesBody:{
            type: String,
            required: true,
            maxLength: 100
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

const Services = model('Services', servicesSchema)

modules.export = servicesSchema;