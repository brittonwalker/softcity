var express = require('express');
var app = express(); // create our app w/ express
var mongoose = require('mongoose'); // mongoose for mongodb
var morgan = require('morgan'); // log requests to the console (express4)
var bodyParser = require('body-parser'); // pull information from HTML POST (express4)
var methodOverride = require('method-override'); // simulate DELETE and PUT (express4)
var jwt = require('express-jwt');
var cors = require('cors');
var db = require('./app/config/database.js')
var env              = require('./env');

// auth0 =========================

app.use(cors());

var authCheck = jwt({
  secret: new Buffer(env.authSecret, 'base64'),
  audience: env.authClientID
});

app.get('/api/public', function(req, res) {
  res.json({ message: "Hello from a public endpoint! You don't need to be authenticated to see this." });
});

app.get('/api/private', authCheck, function(req, res) {
  res.json({ message: "Hello from a private endpoint! You DO need to be authenticated to see this." });
});

// configuration =================

mongoose.connect(db.url || env.MONGOLAB_URI); // connect to mongoDB database on modulus.io

app.use(express.static(__dirname + '/public')); // set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({
  'extended': 'true'
})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({
  type: 'application/vnd.api+json'
})); // parse application/vnd.api+json as json
app.use(methodOverride());

// routes

require('./app/routes.js')(app);
// app.use('/api', app);

// listen (start app with node server.js) ======================================
app.listen(8050);
console.log("App listening on port 8050");
