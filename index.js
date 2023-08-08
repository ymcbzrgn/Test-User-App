const express = require('express');
var ejs = require('ejs');
//var engines = require("consolidate");
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const User = require('./models/User');

app.engine('.ejs', ejs.__express);
app.set('views', './pages');
app.set('view engine', 'ejs');

// Connect to the MongoDB database
mongoose.connect('mongodb://localhost:27017/myDatabase', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

/*
// Serve the index.html page
app.get('/', (req, res) => {
    res.sendFile('pages/index.html', { root: __dirname });
});
*/
app.get('/', (req, res) => {
    res.render('index');
});

// Handle form submissions and store data in MongoDB
app.post('/', async (req, res) => {
    const { name, surname } = req.body;
    const validName = name.length >= 3;
    const validSurname = surname.length >= 3;
    //const validCheckbox = req.body.hasOwnProperty('checked');

    if (!validName || !validSurname) {
        return res.status(400).send('Please enter valid data');
    }

    const newUser = new User({ name, surname });
    await newUser.save();
    res.redirect('/update');
});

// Serve the update.html page and display all data from MongoDB
app.get('/update', async (req, res) => {
    try {
        const allUsers = await User.find();
        //console.log(allUsers)
        res.render('update', { users: allUsers });
    } catch (error) {
        console.error(error);
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`);
});