const express = require('express');
const app = express();
const bodyPser = require('body-parser');
const mongoose = require('mongoose');


app.use(bodyPser.urlencoded({ extended: true }));

mongoose.connect('mongodb://localhost/27017');
mongoose.set('debug', true);
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection Error:'))

app.set('view engine', 'ejs');

require('./controllers/index')(app);

app.listen('3000', () => {
    console.log('Server listening on port 3000');
})