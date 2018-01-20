let Post = require('../models/post')

module.exports = app => {
    app.post('/posts', (req, res) => {
        // TODO: Add new post to mongoose
        let post = new Post(req.body);

        post.save().then((post) => {
            console.log(post)
            return res.redirect('/posts/new')
        }).catch((err) => {
            console.log(err.message)
        })

    })
}
