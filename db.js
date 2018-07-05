/*

this module is responsible for connecting to the database
 and making sure the connection is established
otherwise an error must be indicated that the connection failed.

*/


var tools = require("./tools.js");
var config = require('config');
tools.checkdbConnection(config.DBHost);
