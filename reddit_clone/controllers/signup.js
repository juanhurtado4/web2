const User = require('../models/user');
const jwt = require('jsonwebtoken');

module.exports = (app) => {
    // SIGN UP POST
    app.post('/sign-up', (req, res) => {
        // Create User
        const user = new User(req.body);

        user.save().then((user) => {
            var token = jwt.sign({ _id: user._id }, process.env.SECRET, { expiresIn: "60 days" });
            res.redirect('/posts');
        }).catch((err) => {
            console.log(err.message);
            res.redirect('/posts');
        });
    });
}