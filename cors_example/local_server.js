var express = require('express');
var app = express();

cors = require('./CV_extractor_PJ/cors');


app.use(express.static('public'));
app.use(cors());
app.get('/', function (req, res) {

 var obj = require("fill_first_page.json");
 res.send(obj);
 console.log(obj)
})


var server = app.listen(8080, function () {
var host = server.address().address
var port = server.address().port
  
  
 console.log("Example app listening at http://%s:%s", host, port);
})