module.exports = app => {
    app.get('/posts/new', (req, res) => {
        const currentUser = req.user;
        res.render('new', { pageTitle: 'Reddit Clone/new post', currentUser: currentUser })
    })
}