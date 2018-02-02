module.exports = app => {
    app.get('/sign-up', (req, res) => {
        res.render('signup', { pageTitle: 'sign-up' })
    })
}