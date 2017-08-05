let express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    methodOverride = require('methodOverride'),
    app = express();

//Middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.user(bodyParser.json());
app.use(methodOverride());

let router = express.Router();
router.get('/', (req, res) => {
    res.send('PRRRRRRRRRRA!');
});

app.listen(3000, () => {
    console.log('Node server running on http://localhost:3000');
});