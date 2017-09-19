var mongoose = require('mongoose');
const bodyParser = require('body-parser');
var express = require('express');
var app = express();
var url = require('./config/db');
const port = require('./config/server.js');
const routes = require('./app/routes')
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


mongoose.connect(url.url);
routes(app);
app.listen(port);