const express = require('express');
const hbs = require('express-handlebars');

//const url = 'mongodb://localhost:27017';

const app = express();
app.engine('hbs', hbs.engine({
    extname: 'hbs',
}));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(5000, () => console.log('Server is listening on port 5000...'));