var mongoose = require("mongoose");
var Schema = mongoose.Schema;
 
var genreSchema = new Schema({
    name: String,
    color: String
});

module.exports.genreSchema = genreSchema;