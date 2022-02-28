const express = require('express');
const router = express.Router();
const shark = require('../controllers/sharks');

router.get('/', function (req, res) {
   shark.index(req, res);
});

router.post('/', function (req, res) {
    shark.create(req, res);
});

router.get('/', function (req, res) {
    shark.list(req, res);
})

// Attatch the routes to the router object
module.exports = router;