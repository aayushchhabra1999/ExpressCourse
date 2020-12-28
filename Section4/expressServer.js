/**
 * @author Aayush Chhabra
 * @email aayushgen@gmail.com
 * @desc Create an express server that listens to all methods
 *       at all routes.
 */


const PORT = 3000;
const express = require('express');
const app = express();

// all means all kinds of methods like GET, POST, etc
// * indicated any route
app.all('*', (req, res) => {
  res.send('<h1>This is the home page</h1>');
});

app.listen(PORT, () => {
  console.log(`server listening on port ${PORT}`);
});