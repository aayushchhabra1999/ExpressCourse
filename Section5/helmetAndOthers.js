const PORT = 3000;
const express = require('express');
const app = express();

app.use(helmet());

// let's serve the public foler
app.use(express.static('public'));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/ajax', (req, res) => {
  console.log('Test');
});

app.listen(PORT);
