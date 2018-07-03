var Employee = require('../Models/employee.js');
var mongoose = require('mongoose');

module.exports= function(app){

        app.get('/search/:searchFilter/:searchFilter2/:searchParameter', (req,res)=>{
            var searchFilter = req.params.searchFilter;
            var searchFilter2 = req.params.searchFilter2;
            var searchParameter= req.params.searchParameter;
            console.log(searchFilter);
            console.log(searchFilter2);
            console.log(searchParameter);
            var query={};
            var attribute = searchFilter+'.'+searchFilter2;
            console.log(attribute);
            query[attribute]= searchParameter;
            Employee.find(query,function(err,employees){
                if (err) throw err;
                res.send(employees);
            });

        });
    }
