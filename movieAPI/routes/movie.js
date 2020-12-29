var express = require('express');
var router = express.Router();

const data = require('../data/movieDetails');

/* GET movie page. */
router.get('/:movieId', function (req, res, next) {
  const id = req.params.movieId;
  const results = data.filter((d) => d.id == id);
  results.length ? res.json(results) : res.send('Sorry, no match');
});

module.exports = router;
