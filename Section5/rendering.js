const PORT = 3000;
const path = require('path');

const helmet = require('helmet');
const express = require('express');
const app = express();

app.use(helmet());

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.get('/', (req, res, next) => {
  res.render('index', {
    msg: 'success!',
  });
});

app.listen(PORT);
