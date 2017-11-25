const express = require('express');
const path = require('path');
const app = express();

const bodyParser = require('body-parser');

const userController = require('./controllers/user');
const dataManager = require('./utils/dataManager');
const seatController = require('./controllers/seat');

app.use(express.static(path.join(__dirname, '..', 'build')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.sendFile('index.html'));
app.get('*', dataManager.post);

app.get('/getTheater', seatController.get);

app.post('/verifyUser', userController.verify);
app.post('/createUser', userController.create);

app.listen(process.env.PORT || 3000);
