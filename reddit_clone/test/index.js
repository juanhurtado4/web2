const chai = require('chai');
const chaiHttp = require('chai-http');
const should = chai.should();

chai.use(chaiHttp);

// Describe what you are testing
describe('Index Test', () => {
    // Describe what should happen
    describe('Home Page Renders', () => {
        it('Status code should be 200', (done) => { 
            // In this case we test that the home page loads
            chai.request('localhost:3000')
                .get('/posts')
                .end((err, res) => {
                    if (err) {
                        done(err)
                    }
                    res.status.should.be.equal(200)
                    // Call done if the test completed successfully.
                    done()
                })
        })
    })
})