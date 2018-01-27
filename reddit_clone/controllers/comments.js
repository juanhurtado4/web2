let Comment = require('../models/comments.js');

module.exports = app => {
    app.post('/posts/:postId/comments', (req, res) => {
        const comment = new Comment(req.body);

        comment.save().then(comment => {
            res.redirect(`/posts`)
        }).catch(err => {
            console.log(err);
            res.redirect(`/posts`)
        })
    })
}