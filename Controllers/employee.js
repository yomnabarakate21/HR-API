var Employee = require('../Models/employee.js');
var mongoose = require('mongoose');
//var mongo = require('./mongo');
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
            res.send(employee);
        });
    });

    //Delete route
    app.delete('/employee/:id', (req, response) => {
        const id = req.params.id;
        var newObjectId = mongoose.Types.ObjectId(id);
        Employee.findOneAndRemove({
            _id: newObjectId
        }, function(err) {
            if (err) throw err;
            response.send('Deleted sucessfully!');
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
Employee.count({},function(err,count){
    if(err) {
        response = {"error" : true,"message" : "Error fetching data"};
    }
    else {
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
                    "pages":Math.ceil(count / size)
                };
                res.json(response);
            }
        });

    }
});


    });

}
