// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var streamSchema = new mongoose.Schema({
    name: String,
    ip: String,
    port: Number,
    movie: String
});

// Return model
module.exports = restful.model('Streams', streamSchema);
