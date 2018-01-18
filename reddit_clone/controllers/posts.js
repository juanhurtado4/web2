module.exports = app => {
    app.post('/posts', (req, res) => {
        // TODO: Add new post to mongoose
        console.log(req.body)
        res.redirect('/posts')
    })
}
