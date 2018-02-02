module.exports = app => {
    app.get('/sign-up', (req, res) => {
        const currentUser = req.user;
        res.render('signup', { pageTitle: 'sign-up', currentUser: currentUser })
    })
}