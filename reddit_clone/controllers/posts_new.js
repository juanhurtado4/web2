module.exports = app => {
    app.get('/posts/new', (req, res) => {
    res.render('post_new', { pageTitle: 'Reddit Clone/new post' })
})}