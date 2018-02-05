'use strict'

let express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    methodOverride = require('method-override'),
    app = express();

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());

let router = express.Router();
router.get('/', (req, res) => {
    res.send('<h1>PRRRRRRRRRRA!</h1>');
});
app.use(router);

let Models = require("./models");

let Genre = new Models.Genre({
    name: "Action",
    color: "#FFFFFF"
 });

Genre.save(function(error) { 
    console.log("Your Genre has been saved.");
if (error) {
    console.error(error);
   }
});