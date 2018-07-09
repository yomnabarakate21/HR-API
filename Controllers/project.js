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

    //READ route
    app.get('/project/:id', (req, res) => {
        const id = req.params.id;
        var newObjectId = mongoose.Types.ObjectId(id);
        Project.findOne({
            _id: newObjectId
        }, function(err, project) {
            if (err) {
                response = {
                    "error": true,
                    "message": 'Error in the getting the project !!'
                };
            } else {
                reponse = {
                    "error": false,
                    "data": project
                };
            }
            res.json(reponse);

        });
    });

    //UPDATE ROUTE.
    app.patch('/project/:id', (req, res) => {
        const id = req.params.id;
        var newObjectId = mongoose.Types.ObjectId(id);
        Project.findByIdAndUpdate(newObjectId,
            req.body, {
                new: true
            }, (err, project) => {
                if (err) {
                    response = {
                        "error": true,
                        "message": 'Error !!'
                    };
                } else {
                    response = {
                        "error": false,
                        "message": 'project updated sucessfully! '
                    };
                }
                res.json(response);

            });

    });


}
