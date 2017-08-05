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

app.listen(3000, () => {
    console.log('Node server running on http://localhost:3000');
});