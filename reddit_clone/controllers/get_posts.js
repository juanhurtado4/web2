module.exports = app => {
    app.get('/posts', (req, res) => {
    res.render('home', { pageTitle: 'Reddit Clone' })
})}
