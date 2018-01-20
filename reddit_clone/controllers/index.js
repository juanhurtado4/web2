let Post = require('../models/post');

module.exports = app => {
    app.get('/posts', (req, res) => {

        Post.find({}).then((posts) => {
            res.render('index', { pageTitle: 'Reddit Clone', posts: posts })
        }).catch((err) => {
            console.log(err.message);
        })

        // res.render('index', { pageTitle: 'Reddit Clone' })
})}
