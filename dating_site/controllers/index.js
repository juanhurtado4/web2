function indexFunc(req, res) {
    res.render(index, { pageTitle: 'A new dating website' });
}

module.exports = app => {
    app.get('/', indexFunc)
    app.get('/profiles', indexFunc)
}