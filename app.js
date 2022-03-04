var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const helmet = require('helmet');
const cors = require('cors');

const bookRouter = require('./routes/book');
const borrowerRouter = require('./routes/borrower');
const userRouter = require('./routes/user');
const basicAuth = require('express-basic-auth');

var app = express();

app.use(basicAuth({users: {'admin': '1234'}}));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(helmet());
app.use(cors());

app.use('/book', bookRouter);
app.use('/borrower', borrowerRouter);
app.use('/user', userRouter);

module.exports = app;