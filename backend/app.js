const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const helloRouter = require('./routes/api/v1/hello');
const createRoomRouter = require('./routes/api/v1/createRoom');

const mongoose = require('mongoose');
const cors = require('cors')

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/v1/hello', helloRouter);
app.use('/api/v1/createRoom', createRoomRouter);

mongoose.connect('mongodb://localhost:27017/backend', { useNewUrlParser: true })

module.exports = app;
