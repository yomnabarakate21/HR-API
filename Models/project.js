var mongoose = require('mongoose');
var validate = require('mongoose-validator');

var Schema = mongoose.Schema;

var projectSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    status: Boolean,
    employees: [{
        type: Schema.Types.ObjectId,
        ref: 'employeeSchema'
    }]

});
var Project = mongoose.model('Project',projectSchema);
module.exports = Project;
