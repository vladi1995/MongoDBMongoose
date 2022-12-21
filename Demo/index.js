const express = require('express');
const hbs = require('express-handlebars');

const { MongoClient } = require('mongodb');
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

client.connect()
    .then(() => {
        console.log('DB Connected Successfully');
    });

const db = client.db('movieSuggester');

const moviesCollection = db.collection('movies');

const app = express();
app.engine('hbs', hbs.engine({
    extname: 'hbs',
}));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/movies', async (req, res) => {
    let movies = await moviesCollection.find().toArray();
    res.render('movies', {movies});
});

app.listen(5000, () => console.log('Server is listening on port 5000...'));