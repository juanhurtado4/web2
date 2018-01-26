let Post = require('../models/post');

module.exports = app => {
    app.get('/n/:subreddit', (req, res) => {
        Post.find({ subreddit: req.params.subreddit }).then(posts => {
            res.render('index', { posts: posts, pageTitle: req.params.subreddit })
        }).catch(err => {
            console.log(err)
        })
    })
}