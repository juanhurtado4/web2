module.exports = app => {
    app.get('/posts/new', (req, res) => {
    res.render('new', { pageTitle: 'Reddit Clone/new post' })
})}