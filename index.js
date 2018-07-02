const express = require ('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser =require('body-parser');
const app = express();
const fs = require('file-system');

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
