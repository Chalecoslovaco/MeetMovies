var mongoose = require("mongoose");
var Genres = require("./Models/Genres");
mongoose.connect("mongodb://localhost:27017/meetmovies");

var db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error:"));
db.once("open", function(callback){
    console.log("Connection Succeeded.");
});

var Genre = mongoose.model("Genre", Genres.genreSchema);

module.exports.Genre = Genre;