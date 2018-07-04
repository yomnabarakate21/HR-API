//this module is responsible for connecting to the database and making sure the connection is established
//otherwise an error must be prented indication that the connection failed.
//////////////////////////////

var tools = require("./tools.js");
//database hosted on mlab url to be used.
const URL = 'mongodb://user:a12345@ds161960.mlab.com:61960/cv_info';
//Check connection to database
tools.checkdbConnection(URL);
