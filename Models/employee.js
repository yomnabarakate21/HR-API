var mongoose = require('mongoose');
var validate = require('mongoose-validator')

var Schema = mongoose.Schema;

var emailValidator = [
  validate({
    validator: 'isEmail',
    message: 'Invalid email! '
  })
  ]

var employeeSchema = new Schema({
            _id: Schema.Types.ObjectId,
            name: {
                firstname: {
                    type: String,
                    required: true
                },
                lastname: {
                    type: String,
                    required: true
                }
            },
                courses: [String],
                experience: [{
                    place: {
                        type: String,
                        required: true
                    },
                    from: {
                        type: Date,
                        required: true
                    },
                    to: {
                        type: Date,
                        required: true
                    },
                    roleDescription: String
                }],
                education: {
                    type: [{
                        university: {
                            type: String,
                            required: true
                        },
                        from: {
                            type: Date,
                            required: true
                        },
                        to: {

                            type: Date,
                            required: true
                        },
                        grade: Number
                    }],
                    required: true

                },
                address: [{
                    city: String,
                    Country: String,
                    Street: String
                }],
                phoneNo: Number,
                email: {
                    type: String,
                    required:true,
                    validator:emailValidator
                },
                fb: {
                    type: String,

                },
                languages: [String],
                linkedin: String,
                skills: [String],
                profilePicture: {
                    data: Buffer,
                    content: String
                },
                projects:[{
                    type:Schema.Types.ObjectId,
                    ref:'projectSchema'
                }],
                active:{
                    type:Boolean,
                    required:true
                },
                position:String
            });
            var Employee = mongoose.model('Employee',employeeSchema);
            module.exports= Employee;
