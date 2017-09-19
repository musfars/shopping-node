var mongoose = require('mongoose');
const bodyParser = require('body-parser');
var express = require('express');
var app = express();
var url = require('./config/db');
const port = require('./config/server.js');
const routes = require('./app/routes')
app.use(bodyParser.json());


mongoose.connect(url.url);
routes(app);
app.listen(port);