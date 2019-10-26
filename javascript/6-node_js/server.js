const http = require('http');
const hostname = '127.0.0.1';
const port = 7777;
const DELAY = 100;

http.createServer((req, res) => {
  res.statusCode = 200;

  setTimeout(() => {
    res.end('ping\n');
  }, DELAY);
}).listen(port, hostname, () => {
  console.log('Start server');
});
