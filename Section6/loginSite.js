const PORT = 3000;
const path = require('path');

const express = require('express');
const app = express();

const cookieParser = require('cookie-parser');
const helmet = require('helmet');
app.use(helmet());

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use((req, res, next) => {
  if (req.query.msg === 'fail') {
    res.locals.msg =
      "Sorry! This username and password combination doesn't exist";
  } else {
    res.locals.msg = '';
  }
  next();
});

app.get('/', (req, res, next) => {

  res.render('home');
});

app.get('/statement', (req, res, next) => {
  res.download(path.join(__dirname, 'userStatements', 'BankStatementChequing.png'), 'soCool.png')
});

app.get('/login', (req, res, next) => {
  console.log(req.query);
  res.render('login');
});

app.post('/process_login', (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  if (password === 'x') {
    // this is the correct user.
    res.cookie('username', username);
    res.redirect('/welcome');
  } else {
    res.redirect('/login?msg=fail');
  }
});

app.get('/welcome', (req, res, next) => {
  res.render('welcome', { username: req.cookies.username });
});

app.get('/story/:storyID', (req, res, next) => {
  console.log(req.params)
  res.send(`hello from the ${req.params.storyID}`);
});



app.get('/logout', (req, res, next) => {
  res.clearCookie('username');
  res.redirect('/login');
});

app.all('*', (req, res, next) => {
  res.status(404);
  res.render('404');
});

app.listen(PORT);
