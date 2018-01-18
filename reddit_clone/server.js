let bodyPser = require('body-parser');
let express = require('express');
let app = express();


app.set('view engine', 'ejs');
app.use(express.static('public')); // for css
app.use(bodyPser.urlencoded({extended: true}));

app.get('/posts', (req, res) => {
    res.render('home', {pageTitle: 'Reddit Clone'})
})

app.get('/posts/new', (req, res) => {
    res.render('post_new', {pageTitle: 'Reddit Clone/new post'})
})

require('./controllers/posts.js')(app)







app.listen('3000', () => {
    console.log('Server listening on port 3000')
})