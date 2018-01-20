let Post = require('../models/post.js')

module.exports = app => {
    app.post('/posts', (req, res) => {
        // TODO: Add new post to mongoose
        let post = new Post(req.body);

        post.save().then((post) => {
            console.log(post)
            res.redirect('/posts')
        }).catch((err) => {
            console.log(err.message)
        })
    })
}
