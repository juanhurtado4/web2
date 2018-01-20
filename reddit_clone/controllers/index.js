module.exports = app => {
    app.get('/posts', (req, res) => {
    res.render('index', { pageTitle: 'Reddit Clone' })
})}
