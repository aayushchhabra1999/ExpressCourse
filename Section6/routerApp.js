const express = require('express');
const app = express();

const helmet = require('helmet');
app.use(helmet());

app.use(express.static('public'));
app.use(express.urlencoded());
app.use(express.json());

const baseRouter = require('./theRouter');
const userRouter = require('./userRouter');
app.use('/', baseRouter);
app.use('/user', userRouter);

app.listen(3000);