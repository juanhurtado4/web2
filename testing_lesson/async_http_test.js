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
describe('Reddit Clone TDD/ BDD', function() {​
    it('Should return an array of posts', function(done) {
        Post.find({}).then(function(posts) { // Searches for all Posts
            expect(posts).to.be.an('array'); // Expects posts to be an array
            done(); // Calls done on a success
        }).catch(function(err) {
            done(err); // or call done with an error
        })
    });​
    it('Should add a new post', function(done) {
        // run test here ...
    });​​​​​​
    // it('Should fetch a post with valid properties');
    // it('Should create a new user')
    // it('Should find a user with an id')
    // it('Should find a user with valid properties')
    // it('Should remove a user')
})