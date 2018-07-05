var Employee = require('../Models/employee.js');
var mongoose = require('mongoose');

module.exports = function(app) {

    app.get('/search/:param1/:param2/:param3?', (req, res) => {

        var searchFilter = req.params.param1;
        var searchFilter2 = req.params.param2;
        var searchParameter = req.params.param3;
        var query = {};
        if (!req.params.param3) {
            var attribute = searchFilter;
            query[attribute] = searchFilter2;
        } else {
            var attribute = searchFilter + '.' + searchFilter2;
            query[attribute] = searchParameter;
        }

        Employee.find(query, function(err, employees) {
            if (err) {
                resonse = {
                    "error": true,
                    "message": 'Error in the search query!'
                };

            } else {
                reponse = {
                    "error": false,
                    "data": employees
                };
            }
            res.json(reponse);
        });

    });
}
