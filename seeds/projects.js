var Project = require('../Models/project');
var mongoose = require('mongoose');

module.exports= {
    seedEvents :function() {
  // create some events
  var id1 = '5b3c7951fc13ae3cae000001';
  var id2 = '5b42040ff6f5d7533170bb43';
  var id3 = '5b4200db48b015508f03ea69';
  var id4 = '5b434942ecaa873dcecdfb14';
  const projects = [
    { _id: mongoose.Types.ObjectId(id1) , name: 'Auth-system' },
    { _id: mongoose.Types.ObjectId(id2) ,name: 'Shipping application'},
    { _id:mongoose.Types.ObjectId(id3) ,name: 'Website'},
    { _id:mongoose.Types.ObjectId(id4) ,name: 'IOS application'}
  ];

  // use the Event model to insert/save
  for (project of projects) {
    var newProject = new Project(project);
    newProject.save();
  }

  // seeded!
  console.log('Database seeded!');
}
}
