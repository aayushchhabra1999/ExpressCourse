var express = require('express');
var router = express.Router();
const axios = require('axios');

const API_KEY = '1fb720b97cc13e580c2c35e1138f90f8';
const apiBaseUrl = 'http://api.themoviedb.org/3';
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${API_KEY}`;
const imageBaseUrl = 'http://image.tmdb.org/t/p/w300';

router.use((req, res, next) => {
  res.locals.imageBaseUrl = imageBaseUrl;
  next();
});

/* GET home page. */
router.get('/', function (req, res, next) {
  axios
    .get(nowPlayingUrl)
    .then(function (movieData) {
      res.render('index', {
        parsedData: movieData.data.results,
      });
    })
    .catch(function (err) {
      next(err);
    });
});

router.get('/movie/:id', (req, res, next) => {
  const movieId = req.params.id;
  const thisMovieUrl = `${apiBaseUrl}/movie/${movieId}?api_key=${API_KEY}`;
  axios
    .get(thisMovieUrl)
    .then(function (response) {
      res.render('single-movie', { parsedData: response.data });
    })
    .catch(function (err) {
      next(err);
    });
});

router.post('/search', (req, res, next) => {
  const userSearchTerm = encodeURI(req.body.movieSearch);
  const cat = req.body.cat;
  const movieUrl = `${apiBaseUrl}/search/${cat}?query=${userSearchTerm}&api_key=${API_KEY}`;
  axios
    .get(movieUrl)
    .then(function (response) {
      res.render('index', {
        parsedData: response.data.results,
      });
    })
    .catch(function (err) {
      next(err);
    });
});

module.exports = router;
