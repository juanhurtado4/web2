let bodyPser = require('body-parser');
let express = require('express');
let app = express();


app.set('view engine', 'ejs');
app.use(express.static('public')); // for css
app.use(bodyPser.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render('home')
})

app.listen('3000', () => {
    console.log('Server listening on port 3000')
})