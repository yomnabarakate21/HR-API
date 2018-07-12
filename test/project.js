//The app is currently running in the testing mode.
process.env.NODE_ENV = 'test';
var mongoose = require("mongoose");
var Employee = require('../Models/employee');
var Project = require('../Models/employee');
var app = require('../app');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();
chai.use(chaiHttp);

describe('Project',()=>{
    beforeEach((done)=>{
        Project.remove({},(err)=>{
            done();

        });
    });


    describe('/POST project', () => {
        var project = {
            "name": 'Final project',
            "status":true
        };
        it('it should create a new project', (done) => {
            chai.request(app)
                .post('/project')
                .send(project)
                .end((err,res) => {
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
    describe('/PATCH add/:project_id/:emp_id',()=>{
        it('It should assign an empoloyee to work on a certain project',(done)=>{
            chai.request(app).
            patch('/add/'+)

        })
    })
    */
