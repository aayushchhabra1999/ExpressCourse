var express = require('express');
var router = express.Router();
const PAGE_LENGTH = 20;
const movies = require('../data/movies');

router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/most_popular', function (req, res, next) {
  if (req.query.api_key != 123456789) {
    res.json('Invalid API Key!');
  }
  let page = req.query.page || 1;
  let startIndex = (page - 1) * PAGE_LENGTH;
  let results = movies.filter((d) => d.most_popular);
  results = results.slice(startIndex, startIndex + PAGE_LENGTH)
  res.json({results});
});

module.exports = router;
