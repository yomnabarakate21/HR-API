//The app is currently running in the testing mode.
process.env.NODE_ENV = 'test';
var mongoose = require("mongoose");
var Employee = require('../Models/employee');
var Project = require('../Models/project');
var app = require('../app');
var seed_project = require('../seeds/projects');
var seed_employee = require('../seeds/employees');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();
chai.use(chaiHttp);

// cleat databse before starting your tests and then seed it with you data
describe('Project', () => {
    beforeEach((done) => {
        Project.remove({}, (err) => {
            seed_project.seedEvents();
            done();

        });

    });

    /*
     POST project
    */

    describe('/POST project', () => {
        var project = {
            "name": 'Complier',
            "status": true
        };
        it('it should create a new project', (done) => {
            chai.request(app)
                .post('/project')
                .send(project)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.should.have.property('message').eql('Project created sucessfully! ');
                    res.body.should.have.property('error').eql(false);
                    done();

                });
        });
    });

});

/*
PATCH  add/:project_id/:emp_id

*/
describe('/PATCH add/:project_id/:emp_id', () => {
    it('It should assign an empoloyee to work on a certain project', (done) => {
        chai.request(app)
            .patch('/add/' + '5b3c7951fc13ae3cae000001' + '/' + '5b42040ff6f5d7533170bb43')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Saved');
                res.body.should.have.property('error').eql(false);
                res.body.data.employees[0].should.be.eql('5b42040ff6f5d7533170bb43');
                done();
            });

    });
});

/*
    DELETE project/:id
*/

describe('/DELETE project/:id', () => {
    it('It should delete the project specified and delete it within the employees documents as well', (done) => {
        chai.request(app)
            .delete('/project/5b3c7951fc13ae3cae000001')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Project deleted sucessfully! ');
                Employee.findOne({
                    _id: mongoose.Types.ObjectId('5b42040ff6f5d7533170bb43')
                }, (err, employee) => {
                    employee.projects.length.should.be.eql(0);
                });
                done();


            });
    });
});
