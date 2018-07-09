var Project = require('../Models/project.js');
var mongoose = require('mongoose');
var ObjectID = require('mongodb').objectID;
module.exports = function(app) {

    //CREATE ROUTE
    app.post('/project', (req, res) => {

        var project = new Project({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            from: req.body.from,
            to: req.body.to,
            employees: req.body.employees
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

    //DELETE route
    app.delete('/project/:id', (req, res) => {
        const id = req.params.id;
        var newObjectId = mongoose.Types.ObjectId(id);
        Project.findOneAndRemove({
            _id: newObjectId
        }, function(err) {
            if (err) {
                response = {
                    "error": true,
                    "message": 'Error in the delete operation !!'
                };
            } else {
                response = {
                    "error": false,
                    "message": 'Project deleted sucessfully! '
                };
            }
            res.json(response);
        });
    });

    //Route for projects pagination
    app.get('/projects/:page/:size', (req, res) => {
        var pageNo = parseInt(req.params.page);
        var size = parseInt(req.params.size);
        if (pageNo == 0 || size < 1) {
            response = {
                "error": true,
                "message": "invalid page number, should start with 1"
            }
            return res.json(response);
        }
        //count the total number of documents
        Project.count({}, function(err, count) {
            if (err) {
                response = {
                    "error": true,
                    "message": "Error fetching data"
                };
            } else {
                //fetch according to the page and the size
                q_skip = size * (pageNo - 1);
                q_limit = size;
                var query = Project.find({});
                query.limit(q_limit);
                query.skip(q_skip);
                query.exec(function(err, projects) {
                    if (err) {
                        response = {
                            "error": true,
                            "message": "Error!!"
                        };
                        return res.json(response);
                    } else {
                        response = {
                            "error": false,
                            "data": projects,
                            "pages": Math.ceil(count / size)
                        };
                        res.json(response);
                    }
                });

            }
        });


    });

    //Add employee to project
    app.patch('/add/:project_id/:employee_id', (req, res) => {
        const proj_id = req.params.project_id;
        var projObjectId = mongoose.Types.ObjectId(proj_id);
        var empObjectId = mongoose.Types.ObjectId(req.params.employee_id);
        Project.findOne({
            _id: projObjectId
        }, function(err, project) {
            if (err) {
                response = {
                    "error": true,
                    "message": 'Error in the getting the project !!'
                };
                res.json(response);
            } else {
                var lenOld = project.employees.length;
                project.employees.addToSet(empObjectId);
                project.save((err) => {
                    if (err) throw err;
                    else {
                        var lenNew = project.employees.length;
                        if (lenNew == lenOld) {
                            response = {
                                "error": false,
                                "message": 'dupliacte!'
                            };
                            console.log('hena!');
                            res.json(response);
                        } else {
                            response = {
                                "error": false,
                                "message": 'Saved'
                            };
                                res.json(response);
                        }
                    }
                });

            }

        });
    });

}
