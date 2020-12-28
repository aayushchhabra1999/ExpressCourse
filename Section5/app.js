/**
 * @author Aayush Chhabra
 * @email aayushgen@gmail.com
 * @desc Working with middlewares.
 */

const PORT = 3000;
const express = require('express');
const app = express();

const validateUser = (req, res, next) => {
  res.locals.validated = true;
  console.log('validated ran!');
  next();
};

app.use('/admin', validateUser);

app.get('/', (req, res, next) => {
  res.send('<h1>Main Page</h1>');
  console.log(res.locals.validated);
});

app.get('/admin', (req, res, next) => {
  res.send('<h1>Admin Page</h1>');
  console.log(res.locals.validated);
});

app.listen(PORT);
