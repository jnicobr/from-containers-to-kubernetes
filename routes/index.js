const express = require('express');
const { route } = require('express/lib/router');
const router = express.Router();
const path = require('path');

router.use(function (req, res, next) {
   console.log('/' + req.method);
   next();
});

// Landing route
route.get('/', function (req, res) {
   res.sendFile(path.resolve('views/index.html'));
});

// Make routes accessible as a module
module.exports = router;