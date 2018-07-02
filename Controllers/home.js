var Employee = require('../Models/employee.js');
module.exports = function(app){

    app.get('/home',(req,res)=>{
        Employee.find({}, function(err, users){
       if(err){
         console.log(err);
       } else{
           console.log(users);
           res.send(users);

       }


   });
    ;



});
}
