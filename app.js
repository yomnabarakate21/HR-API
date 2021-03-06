const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const fs = require('file-system');
var db = require('./db');
var Employee = require('./Models/employee');
cors = require('./cors');
app.use(cors())
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
//load all your routes dynamically
fs.readdirSync('./Controllers').forEach(function(file) {
    var routes = require('./Controllers/' + file);
    routes(app);

});
module.exports = app;
