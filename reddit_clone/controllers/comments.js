let Comment = require('../models/comments.js');
let Post = require('../models/post');

module.exports = app => {
    app.post('/posts/:postId/comments', (req, res) => {
        const comment = new Comment(req.body);
        comment.save().then(comment => {
            return Post.findById(req.params.postId)
        }).then(post => {
            post.comments.unshift(comment)
            return post.save()
        }).then(post => {
            res.redirect('/posts')
        }).catch(err => {
            console.log(err);
            res.redirect(`/posts`)
        })
    })
}