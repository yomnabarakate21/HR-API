var Employee = require('../Models/employee.js');
var mongoose = require('mongoose');

module.exports = function(app) {

    app.post('/search', (req, res) => {
        console.log(req.body.name);
        var query = {};
        if (req.body.name.firstname) {
            var firstname=req.body.name.firstname;
            query['name.firstname'] =  new RegExp('^'+firstname+'.*', "i");
        } else if(req.body.name.lastname) {
            var firstname=req.body.name.lastname;
            query['name.lastname'] = new RegExp('^'+lastname+'.*', "i");
        }
        else if(req.body.email){
            var email = req.body.email;
            query['email'] = new RegExp('^'+email+'.*', "i");
        }
        else if(req.body.position){
            var position = req.body.position;
            query['position'] = new RegExp('^'+position+'.*', "i");

        }
        else if(req.body.active){
            var active = req.body.active;
            query['active']=active;
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
