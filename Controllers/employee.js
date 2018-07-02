var Employee = require('../Models/employee.js');
module.exports = function(app){

    var objectID = require('mongodb').objectID;
    app.get('/employee/:id/:firstname',(req,res)=>{
        const id = req.params.id;
        const firstnameParam= req.params.firstname;
        const details = {
            '_id':new objectID(id)
        };
        Employee.find({firstname:firstnameParam},function(err,employees){
            if (err) throw err;
            res.send(employees)
        });


    });


}
