let Post = require('../models/post');

module.exports = app => {
    app.get('/n/:subreddit', (req, res) => {
        const currentUser = req.user;
        Post.find({ subreddit: req.params.subreddit }).then(posts => {
            res.render('index', { posts: posts, pageTitle: req.params.subreddit, currentUser: currentUser })
        }).catch(err => {
            console.log(err)
        })
    })
}