let Post = require('../models/post.js')
let User = require('../models/user.js')


module.exports = app => {
    app.post('/posts', (req, res) => {
        let post = new Post(req.body);
        post.author = req.user._id

        post.save().then((post) => {
            return User.findById(req.user._id)
        }).then(user => {
            user.posts.unshift(post);
            user.save();
            res.redirect('/posts')
        }).catch((err) => {
            console.log(err.message)
        })
    })
}