const Post = require('../models/post');
const chai = require('chai');
const chaiHttp = require('chai-http');
const mocha = require('mocha');
const app = require('../server');
const expect = chai.expect;
const should = chai.should();​
chai.use(chaiHttp)
    // connecting our server to be able to make request with chai
const agent = chai.request.agent(app)​
    // connect to mongoose
    ​
describe('Reddit Clone TDD/ BDD', () => {​
    it('Should return an array of posts', done => {
        pass
    });​
    it('Should add a new post', done => {
        // run test here ...
    });​​​​​​
    // it('Should fetch a post with valid properties');
    // it('Should create a new user')
    // it('Should find a user with an id')
    // it('Should find a user with valid properties')
    // it('Should remove a user')
})