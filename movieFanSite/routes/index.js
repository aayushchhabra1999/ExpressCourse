var express = require('express');
var router = express.Router();
const axios = require('axios');

const API_KEY = '1fb720b97cc13e580c2c35e1138f90f8';
const apiBaseUrl = 'http://api.themoviedb.org/3';
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${API_KEY}`;
const imageBaseUrl = 'http://image.tmdb.org/t/p/w300';

router.use((req, res, next)=>{
  res.locals.imageBaseUrl = imageBaseUrl;
  next();
})

/* GET home page. */
router.get('/', function (req, res, next) {
  axios
    .get(nowPlayingUrl)
    .then(function (movieData) {
      let data = movieData.data.results;
      res.render('index', {
        parsedData: data
      })
    })
    .catch(function (err) {
      next(err);
    });
});

module.exports = router;
