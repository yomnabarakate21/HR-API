const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const fs = require('file-system');
var db= require('./db');
//require the employee model
var Employee = require('./Models/employee');
//var myDate = new Date(2014, 11, 12, 14, 12);
//console.log(myDate);
/*
var trial = new Employee({
    _id: new mongoose.Types.ObjectId(),
    name:{
        firstname: 'Passent',
        lastname: 'Ehab'
    },
    education: {
        university: 'AUC',
        to: myDate,
        from: myDate,
        grade: 3.9
    },
    email: 'yomna@gmail.com'
})
*/
/*
trial.save(function(err) {
    if (err) {
        throw err;
    }
    console.log('User created!');
});
*/
app.use(bodyParser.urlencoded({ extended: true }));
//load all your routes dynamically
fs.readdirSync('./Controllers').forEach(function(file) {
    var routes = require('./Controllers/' + file);
    routes(app);
    console.log(file);

});

//specify local host port on which the app is running.
const PORT = 8000;

app.listen(PORT, () => {
    console.log(`We are listening on port ${PORT}`);
})
