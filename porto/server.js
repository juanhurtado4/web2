const cookieParser = require('cookie-parser');
const bodyPser = require('body-parser');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const express = require('express');
require('dotenv').config();
const app = express();
app.use(cookieParser());

const checkAuth = (req, res, next) => {
    console.log("Checking authentication");
    if (typeof req.cookies === 'undefined' || req.cookies.nToken === 'undefined' || req.cookies.nToken === null) {
        req.user = null;
    } else {
        var token = req.cookies.nToken;
        var decodedToken = jwt.decode(token, { complete: true }) || {};
        req.user = decodedToken.payload;
    }

    next()
}
app.use(checkAuth);

app.set('view engine', 'ejs');
app.use(express.static('public')); // for css
app.use(bodyPser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/porto');
mongoose.set('debug', true);
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection Error:'))

app.set("view engine", "ejs");

require('./controllers/index.js')(app)

// require('./controllers/new.js')(app)

// require('./controllers/create.js')(app)

// require('./controllers/show.js')(app)

// require('./controllers/subreddit.js')(app)

// require('./controllers/comments.js')(app)

require('./controllers/signup.js')(app)

require('./controllers/register.js')(app)

require('./controllers/logout.js')(app)

require('./controllers/login_form.js')(app)

require('./controllers/login.js')(app)






app.listen('3000', () => {
    console.log('Server listening on port 3000')
})