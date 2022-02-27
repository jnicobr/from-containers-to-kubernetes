// Express App & Router object
const express = require('express');
const app = express();
const router = express.Router();
// Database connection
const db = require('./db.js');

// Base directory & ports
const path = __dirname + '/views/';
const port = 8080;

// log routes requests and passes on to the app's routes
router.use(function (req, res, next) {
    console.log('/' + req.method);
    next();
})

// App's routes
router.get('/', function (req, res) {
    res.sendFile(path + 'index.html');
});

router.get('/sharks', function (req, res) {
    res.sendFile(path + '/sharks.html');
});

app.engine('html', require('ejs').renderFile); // Map EJS template to HTML
app.set('view engine', 'html'); // Set default view engine to HTML
app.use(express.urlencoded({extended: true})); // Parse url parameters
app.use(express.static(path)); // Router
// Mount app's assets 
app.use('/', router);

// Listen to port 8080
app.listen(port, function () {
   console.log('Example app listening  on port 8080!'); 
});