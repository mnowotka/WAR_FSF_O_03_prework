const http = require('http');

const requestListener = function (req, res) {
  // Special handler to process incoming data - it only logs the data to the console and adds "..."
  req.on('data', chunk => {
    // MODIFY YOUR CODE HERE - add timeouts and repeat
    const phrase = String(chunk) + '...';
  });

  // Needed to inform about success
  res.writeHead(200);
  res.end();
};

// Creates the server and uses listener when requests arrive
const server = http.createServer(requestListener);
server.listen(8080);
