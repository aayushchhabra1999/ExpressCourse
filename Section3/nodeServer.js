/**
 * @author Aayush Chhabra
 * @email aayushgen@gmail.com
 * @desc Writing a node server without express.
 */

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url == '/favicon.ico') {
    return;
  } else if (req.url === '/') {
    // set the headers for the response
    res.writeHead(200, { 'content-type': 'text/html' });

    // read the contents of the file to serve
    const homeHTML = fs.readFileSync('home.html');

    // set the body for the response.
    res.write(homeHTML);

    // send the response
    res.end();
  } else if (req.url === '/node.png') {
    // set the headers for the response
    res.writeHead(200, { 'content-type': 'image/png' });

    // read the contents of the file to serve
    const image = fs.readFileSync('node.png');

    // set the body for the response.
    res.write(image);

    // send the response
    res.end();
  } else {
    // set the headers for the response
    res.writeHead(404, { 'content-type': 'text/html' });

    // set the body for the response.
    res.write('<h4>Sorry, Not found!</h4>');

    // send the response
    res.end();
  }
});

server.listen(3000);
