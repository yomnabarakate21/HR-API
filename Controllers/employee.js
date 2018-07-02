var Employee = require('../Models/employee.js');
var mongoose = require('mongoose');
module.exports = function(app){

    var ObjectID = require('mongodb').objectID;
    app.get('/employee/:id',(req,res)=>{
        const id = req.params.id;
        //var newObjectId = new ObjectID.createFromHexString(id);
var newObjectId= mongoose.Types.ObjectId(id);
        Employee.find({_id:newObjectId},function(err,employees){
            if (err) throw err;
            res.send(employees)
        });


    });


}
