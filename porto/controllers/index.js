let Post = require('../models/post');

function home(req, res) {
    Post.find({}).then(posts => {
        res.render('index', { pageTitle: 'Porto: Showcase your skills', posts: posts, currentUser: currentUser })
    }).catch(err => {
        console.log(err.message);
    })
}

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