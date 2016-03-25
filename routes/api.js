// Dependencies
var express = require('express');
var router = express.Router();

// Models
var Streams = require('../models/streams');

// Routes
Streams.methods(['get', 'put', 'post', 'delete']);
Streams.register(router, '/streams');

// Return router
module.exports = router;
