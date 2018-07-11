var mongoose = require('mongoose');
var validate = require('mongoose-validator');

var Schema = mongoose.Schema;

var projectSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    status: Boolean,
    employees: [{
        type: Schema.Types.ObjectId,
        ref: 'employeeSchema'
    }],
    from: {
        type: Date
    },
    to: {
        type: Date

    }

});
var Project = mongoose.model('Project', projectSchema);
module.exports = Project;
