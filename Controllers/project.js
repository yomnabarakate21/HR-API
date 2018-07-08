var Project = require('../Models/project.js');
var mongoose = require('mongoose');
var ObjectID = require('mongodb').objectID;
module.exports= function(app){

    //CREATE ROUTE
    app.post('/project', (req, res) => {

        var project = new Project({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            from:req.body.from,
            to:req.body.to,
            employees:req.body.employees
        });

        project.save(function(err) {
            if (err) {
                response = {
                    "error": true,
                    "message": 'Error in the creation operation !!'
                };
            } else {
                response = {
                    "error": false,
                    "message": 'Project created sucessfully! '
                };
            }
            res.json(response);

        });

    });
}
