// Import Mongoose
const mongoose = require('mongoose');

// Declare URI variables
const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_HOSTNAME,
    MONGO_PORT,
    MONGO_DB 
} = process.env;

// Declare URI
// authSource=admin is required to could use user & pass. Is the name of the db with the credentials
const URI = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

// Create the connection
mongoose.connect(URI, {userNewUrlParser: true});