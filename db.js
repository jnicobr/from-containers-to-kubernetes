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

// Connection options
const options = {
    useNewUrlParser: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    connectTimeoutMS: 10000,
};

// Declare URI
// authSource=admin is required to could use user & pass. Is the name of the db with the credentials
const URI = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;

// Create the connection handling connection failure
mongoose.connect(URI, options)
    .then(function() {
        console.log('MongoDB is connected');
    })
    .catch(function(error) {
        console.log(error);
    });