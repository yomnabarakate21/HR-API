//The app is currently running in the testing mode.
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

    /*
    TEST THE /GET/home route
    */
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

/*
TEST THE /GET/:id route
*/

describe('/GET/:id Employee', () => {
    it('it should get an employee with this id', (done) => {
        var myDate = new Date(2014, 11, 12, 14, 12);
        var id = "5b3dcb069b8f0d0138e4b706";
        var newObjectId = mongoose.Types.ObjectId(id);
        var employee = new Employee({
            _id: newObjectId,
            name: {
                firstname: 'John',
                lastname: 'Don'
            },
            education: {
                university: 'AUC',
                to: myDate,
                from: myDate,
                grade: 3.9
            },
            email: 'John@gmail.com',
            active: true
        });
        employee.save((err, employee) => {
            chai.request(app)
                .get('/employee/' + id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('object');
                    res.body.data.should.have.property('name');
                    res.body.data.should.have.property('education');
                    res.body.data.should.have.property('email');
                    done();

                });
        });
    });
});

/*
TEST the /GET/search/:param1/:param2 route
*/

describe('/POST',()=>{
    it('It should search for an employee with a certain filter',(done)=>{
        var employee_data ={
            'name':{
                'firstname':'John',
                'lastname':'Don'
            }
        };
        chai.request(app)
        .post('/search')
        .send(employee_data)
        .end((err,res)=>{
            res.should.have.status(200);
            res.body.should.have.property('error').eql(false);
            res.body.data.should.be.a('array');
            res.body.data.length.should.be.eql(1);
            res.body.data[0].should.have.property('name').property('firstname').eql('John');
            done();

        });
    });

});


/*
TEST /DELETE/:id route
*/
describe('/DELETE/:id', () => {
    it('It should delete an employee with this id', (done) => {
        var id = "5b3dcb069b8f0d0138e4b706";
        chai.request(app)
            .delete('/employee/' + id)
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                res.body.should.have.property('message').eql('Employee deleted sucessfully! ');
                res.body.should.have.property('error').eql(false);
                done();
            });

    });

});
