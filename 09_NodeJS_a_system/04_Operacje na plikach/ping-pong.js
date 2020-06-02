const fs = require('fs');

// Implement reading / writing the files below
function playGame() {
}

playGame();

// ASSERTION BELOW - we read result.txt file and check if result is aligned with expected one
const expected = '' +
  `PING! - PONG!
PING! - PONG!
PING! - PONG!
PING! - PONG!
PING! - PONG!
PING! - PONG!`;

const resultFileContent = String(fs.readFileSync('./result.txt'));
console.assert(resultFileContent === expected, 'Ping pong game not complete!', resultFileContent);
