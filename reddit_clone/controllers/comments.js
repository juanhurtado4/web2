let Comment = require('../models/comments.js');
let Post = require('../models/post');
let User = require('../models/user');

module.exports = app => {
    app.post('/posts/:postId/comments', (req, res) => {
        const comment = new Comment(req.body);
        comment.author = req.user._id

        comment.save().then(comment => {
            return User.findById(req.user._id)
        }).then(user => {
            user.comments.unshift(comment);
            user.save()
            return Post.findById(req.params.postId)
        }).then(post => {
            post.comments.unshift(comment)
            return post.save()
        }).then(post => {
            res.redirect(`/posts/${req.params.postId}`)
        }).catch(err => {
            console.log(err);
            res.redirect(`/posts`)
        })
    })
}