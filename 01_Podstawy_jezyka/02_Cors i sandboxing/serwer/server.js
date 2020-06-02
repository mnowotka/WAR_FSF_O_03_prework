const http = require('http');
const port = 8082;

const requestHandler = (request, response) => {
  console.log('Nowy request: ', request.method, request.url, request.headers);

  // Odkomentuj do zadania 2 i odpal ponownie serwer!
  // response.setHeader('Access-Control-Allow-Origin', request.headers.origin);
  // response.setHeader('Access-Control-Request-Method', '*');
  // response.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
  // response.setHeader('Access-Control-Allow-Headers', '*');

  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.end('Hello Node.js Server!')
};

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
  if (err) {
    return console.log('Nie udało się stworzyć serwera...', err)
  }

  console.log(`Serwer nasłuchuje na porcie ${port}`);
});
