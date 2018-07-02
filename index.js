const express = require ('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser =require('body-parser');
const app = express();
const fs = require('file-system');
const mongoose =require('mongoose');
mongoose.connect('mongodb://user:a12345@ds161960.mlab.com:61960/cv_info');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('We are connected!')
});



//load all your routes dynamically
fs.readdirSync('./Controllers').forEach(function(file){
    var routes = require('./Controllers/'+file);
    routes (app);
    console.log(file);

});

//specify local host port on which the app is running.
const PORT = 8000;

app.listen(PORT,()=>{
    console.log(`We are listening on port ${PORT}`) ;
})
