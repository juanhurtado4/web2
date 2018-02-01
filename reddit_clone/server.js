require('dotenv').config();
let bodyPser = require('body-parser');
let mongoose = require('mongoose');
let express = require('express');
let app = express();


app.set('view engine', 'ejs');
app.use(express.static('public')); // for css
app.use(bodyPser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/27017');
mongoose.set('debug', true);
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection Error:'))

app.set("view engine", "ejs");

require('./controllers/index.js')(app)

require('./controllers/new.js')(app)

require('./controllers/create.js')(app)

require('./controllers/show.js')(app)

require('./controllers/subreddit.js')(app)

require('./controllers/comments.js')(app)

require('./controllers/signup.js')(app)

require('./controllers/auth.js')(app)

app.listen('3000', () => {
    console.log('Server listening on port 3000')
})