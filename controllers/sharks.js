// Import the sharks model & path module to route the form for new sharks
const path = require('path');
const Shark = require('../models/sharks');

// Show the page with the new shark form
exports.index = function (req, res) {
    res.sendFile(path.resolve('views/sharks.html'));
}

// Stores the new shark in the database
exports.create = function (req, res) {
    // Get the body of the POST request
    var newShark = new Shark(req.body);
    console.log(req.body);

    newShark.save(function (err) { // error-first Callback function
        if (err) { // Report the error
            res.status(400).send('Unable to save shark to database');
        } else { // Redirect the user to the created shark
            res.redirect('/sharks/getshark');
        }
    });
}

// List the collection of sharks to the user
exports.list = function (req, res) {
    // Find all entries of sharks
    Shark.find({}).exec(function (err, sharks) {
        if (err) {
            return res.send(500, err);
        }

        // Return the collection of sharks in the page /getshark
        res.render('getshark', {
            sharks: sharks
        });
    });
}