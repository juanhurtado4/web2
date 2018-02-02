let Post = require('../models/post');

module.exports = app => {
    app.get('/posts', (req, res) => {
        const currentUser = req.user;

        Post.find({}).then((posts) => {
            res.render('index', { pageTitle: 'Reddit Clone', posts: posts, currentUser: currentUser })
        }).catch((err) => {
            console.log(err.message);
        })

        // res.render('index', { pageTitle: 'Reddit Clone' })
    })
}