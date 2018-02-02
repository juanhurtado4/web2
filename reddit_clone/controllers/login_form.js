// LOGIN FORM
module.exports = app => {
    app.get('/login', (req, res) => {
        res.render('login', { pageTitle: 'Reddit Clone/log in' });
    })
};