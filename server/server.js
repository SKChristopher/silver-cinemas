const express = require('express');
const path = require('path');
const app = express();

const bodyParser = require('body-parser');

const userController = require('./controllers/user');
const theaterController = require('./controllers/theater');

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.sendFile('index.html'));

app.post('/verifyUser', userController.verify);
app.post('/createUser', userController.create);

app.post('/createTheater', theaterController.create);
app.get('/getTheaters', theaterController.get);

app.post('/updateTheater', theaterController.update);

app.listen(process.env.PORT || 3000);
