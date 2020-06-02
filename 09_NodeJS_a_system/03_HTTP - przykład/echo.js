const http = require('http');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Triggers request to the server with given phrase
 */
const request = (phrase) =>{
  // Prepare request payload
  const options = {
    port: 8080,
    host: '127.0.0.1',
    method: 'POST'
  };

  const req = http.request(options);
  req.write(phrase);
  req.end();
};

// This code repeats itself over and over again, asking for input
const echo = () => {
  // This callback is called once you press enter
  rl.question('Echo: ', (answer) => {
    // ADD MISSING CODE HERE

    // This triggers echo listener again - do not modify line below!
    echo();
  });
};

echo();


