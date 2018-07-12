var Employee = require('../Models/employee');
var mongoose = require('mongoose');

module.exports={
    seedEvents:function(){
        var id1 = '5b3c7951fc13ae3cae000001';
        var id2 = '5b42040ff6f5d7533170bb43';
        var id3 = '5b4200db48b015508f03ea69';
        const employees = [
            {
                _id: mongoose.Types.ObjectId(id1),
                name:{
                    firstname:"Ahmed",
                    lastname:"Ehab"
                },
                email:"ahmedehab@gamil.com"
            },
            {
                _id: mongoose.Types.ObjectId(id2),
                name:{
                    firstname:"Rana",
                    lastname:"Tarek"
                },
                email:"ranaTarek233@gamil.com"

            },
            {
                _id: mongoose.Types.ObjectId(id3),
                name:{
                    firstname:"Doaa",
                    lastname:"Fareed"
                },
                email:"dfareed7878@hotmail.com"

            }

        ];
        for (employee of employees) {
          var newEmployee = new Employee(employee);
          newEmployee.save();
        }

        // seeded!
        console.log('Database seeded!');
      }
    }
