const http = require('http');
const options = {
  hostname: '127.0.0.1',
  port: 7777,
};

const DEFAULT_NUMBER_OF_REQUESTS = 3;
const stdout = process.stdout;

const getValue = (flag) => {
  const index = process.argv.indexOf(flag);

  return (index > -1) ? process.argv[index + 1] : null;
}
const numberOfRequests = getValue('-r') || DEFAULT_NUMBER_OF_REQUESTS;
const isParallel = process.argv.includes('-p');

const getCounter = () => {
  let counter = 1;

  return function() {
    return counter++;
  };
};
const requestCounter = getCounter();

const sendRequest = (quantity) => {
  const req = http.request(options, (res) => {
    res.on('data', (chunk) => {
      stdout.write(`${requestCounter()} ${chunk}`);
    });

    res.on('end', () => {
      if (quantity > 1 && !isParallel)
        sendRequest(quantity - 1);
    });
  });

  if (quantity > 1 && isParallel)
    sendRequest(quantity - 1);

  req.end();
};

sendRequest(numberOfRequests);
