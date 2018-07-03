var Employee = require('../Models/employee.js');
var mongoose = require('mongoose');

module.exports = function(app) {

    var ObjectID = require('mongodb').objectID;
    //Read route
    app.get('/employee/:id', (req, res) => {
        const id = req.params.id;
        var newObjectId = mongoose.Types.ObjectId(id);
        Employee.find({
            _id: newObjectId
        }, function(err, employee) {
            if (err) throw err;
            res.send(employee)
        });
    });
    //Delete route
    app.delete('/employee/:id', (req, response) => {
        const id = req.params.id;
        var newObjectId = mongoose.Types.ObjectId(id);
        Emloyee.find({_id: newObjectId},
            function(err, employee) {
                if (err) throw err;
                employee.remove(function(err) {
                    if (err) throw err;
                    res.send('Employee'+id+'deleted sucessfully');

                });
            });

    });

}
