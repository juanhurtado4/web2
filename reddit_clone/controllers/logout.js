app.get('/logout', (req, res) => {
    res.clearCookie('nToken');
    res.redirect('/posts');
});