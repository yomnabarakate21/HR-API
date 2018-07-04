process.env.NODE_ENV = 'test';
var mongoose = require("mongoose");
var Employee = require('../Models/employee');
var app = require('../app');
//Require the dev-dependencies
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');
let should = chai.should();
chai.use(chaiHttp);

describe('Employee', () => {
    beforeEach((done) => { //Before each test we empty the database
        Employee.remove({}, (err) => {
            done();
        });
    });
    describe('/GET home', () => {
        it('it should GET all the employees', (done) => {
            chai.request(app)
                .get('/home')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.data.should.be.a('array');
                    res.body.data.length.should.be.eql(0);
                    done();
                });
        });
    });
});
