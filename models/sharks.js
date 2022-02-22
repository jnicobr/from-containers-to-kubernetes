// Include mongoose & create an schema
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create the fields for the schema
const Shark = new Schema({
    name: {type: String, required: true},
    description: {type: String, required: true}
});

// Create the Shark model & export it
module.exports = mongoose.model('Shark', Shark);