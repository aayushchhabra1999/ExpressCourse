/**
 * @author Aayush Chhabra
 * @email aayushgen@gmail.com
 * @desc Create an express server with routing
 */

const path = require('path');

const PORT = 3000;
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

app.post('/', (req, res) => {
  res.send('Welcome to post home');
});

app.put('/', (req, res) => {
  res.send('Welcome to put home');
});

app.delete('/', (req, res) => {
  res.send('Welcome to delete home');
});

app.all('*', (req ,res) => {
  res.send('Not Found!');
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
