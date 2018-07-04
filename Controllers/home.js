var Employee = require('../Models/employee.js');
module.exports = function(app){

    app.get('/home',(req,res)=>{
        Employee.find({}, function(err, employees){
            if (err) {
                resonse = {
                    "error": true,
                    "message": 'Error in the getting employees data !!'
                };
            }
            else{
                reponse = {
                    "error":false,
                    "data":employees
                };
            }

   });
    ;



});
}
