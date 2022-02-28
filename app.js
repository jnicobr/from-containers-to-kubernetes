// Express App & Router object
const express = require('express');
const app = express();
const router = express.Router();
// Database connection
const db = require('./db.js');
// Routes
const sharks = require('./routes/sharks');

// Base directory & ports
const path = __dirname + '/views/';
const port = process.env.PORT || 8080;

app.engine('html', require('ejs').renderFile); // Map EJS template to HTML
app.set('view engine', 'html'); // Set default view engine to HTML
app.use(express.urlencoded({extended: true})); // Parse url parameters
// Mount app's assets 
app.use(express.static(path)); 
app.use('/sharks', sharks); // Router

// Listen to port 8080
app.listen(port, function () {
   console.log(`Example app listening  on port ${port}!`); 
});