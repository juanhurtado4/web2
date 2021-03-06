let Post = require('../models/post.js');

module.exports = app => {
    app.get('/posts/:id', (req, res) => {
        let postId = req.params.id;
        const currentUser = req.user;
        Post.findById(postId).populate('comments').then(post => {
            res.render('show', { post: post, currentUser: currentUser, pageTitle: `Reddit Clone/${post.title}` })
        }).catch((err) => {
            console.log(err);
        })
    })
}