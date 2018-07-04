var Employee = require('../Models/employee.js');
var mongoose = require('mongoose');

module.exports = function(app) {

    app.get('/search/:searchFilter/:searchFilter2/:searchParameter?', (req, res) => {

        var searchFilter = req.params.searchFilter;
        var searchFilter2 = req.params.searchFilter2;
        var searchParameter = req.params.searchParameter;
        var query = {};
        if (!searchParameter) {
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
