var Employee = require('../Models/employee.js');
var mongoose = require('mongoose');
var ObjectID = require('mongodb').objectID;
module.exports = function(app) {

    //CREATE route
    app.post('/employee', (req, res) => {

        var employee = new Employee({
            _id: new mongoose.Types.ObjectId(),
            name: req.body.name,
            courses: req.body.courses,
            experience: req.body.experience,
            education: req.body.education,
            address: req.body.address,
            phoneNo: req.body.phoneNo,
            email: req.body.email,
            languages: req.body.languages,
            active: req.body.active,
            linkedin: req.body.linkedin,
            skills: req.body.skills,
            profilePicture: req.body.profilePicture,
            projects: req.body.projects,
            position: req.body.position,
            fb: req.body.fb

        });

        employee.save(function(err) {
            if (err) {
                response = {
                    "error": true,
                    "message": 'Error in the creation operation !!'
                };
            } else {
                response = {
                    "error": false,
                    "message": 'Employee created sucessfully! '
                };
            }
            res.json(response);

        });

    });

    //UPDATE route
    app.patch('/employee/:id', (req, res) => {
        const id = req.params.id;
        var newObjectId = mongoose.Types.ObjectId(id);
        Employee.findByIdAndUpdate(newObjectId,
            req.body, {
                new: true
            }, (err, employee) => {
                if (err) {
                    response = {
                        "error": true,
                        "message": 'Error !!'
                    };
                } else {
                    response = {
                        "error": false,
                        "message": 'Employee updated sucessfully! '
                    };
                }
                res.json(response);

            });

    });



    //READ route
    app.get('/employee/:id', (req, res) => {
        const id = req.params.id;
        var newObjectId = mongoose.Types.ObjectId(id);
        Employee.findOne({
            _id: newObjectId
        }, function(err, employee) {
            if (err) {
                response = {
                    "error": true,
                    "message": 'Error in the getting the employee !!'
                };
            } else {
                reponse = {
                    "error": false,
                    "data": employee
                };
            }
            res.json(reponse);
            console.log(employee);

        });
    });

    //Delete route
    app.delete('/employee/:id', (req, res) => {
        const id = req.params.id;
        var newObjectId = mongoose.Types.ObjectId(id);
        Employee.findOneAndRemove({
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
                    "message": 'Employee deleted sucessfully! '
                };
            }
            res.json(response);
        });
    });
    //route for pagination
    app.get('/employees/:page/:size', (req, res) => {
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
        Employee.count({}, function(err, count) {
            if (err) {
                response = {
                    "error": true,
                    "message": "Error fetching data"
                };
            } else {
                //fetch according to the page and the size
                q_skip = size * (pageNo - 1);
                q_limit = size;
                var query = Employee.find({});
                query.limit(q_limit);
                query.skip(q_skip);
                query.exec(function(err, employees) {
                    if (err) {
                        response = {
                            "error": true,
                            "message": "Error!!"
                        };
                        return res.json(response);
                    } else {
                        response = {
                            "error": false,
                            "data": employees,
                            "pages": Math.ceil(count / size)
                        };
                        res.json(response);
                    }
                });

            }
        });


    });

}
