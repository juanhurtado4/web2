module.exports = app => {
    const currentUser = req.user;
    app.get('/posts/new', (req, res) => {
        res.render('new', { pageTitle: 'Reddit Clone/new post', currentUser: currentUser })
    })
}