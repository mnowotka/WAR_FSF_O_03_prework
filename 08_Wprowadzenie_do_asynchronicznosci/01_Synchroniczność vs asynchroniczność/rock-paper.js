const rockPaperBeatingMap = ['rock', 'paper', 'scissors', 'rock'];

let enemyShown;
let youShown;

// Enemy always checks if he/she knows what you showed first
// In that case, returns winning symbol
// If it's impossible to determine winning situation, he/she shows random symbol
const enemySymbol = () => {
  // This code checks if you shown something first and uses this knowlede to win
  if (youShown) {
    enemyShown = rockPaperBeatingMap[rockPaperBeatingMap.indexOf(youShown) + 1];
    console.log('Enemy (thinking): I know exactly what to show: ' + enemyShown);
  } else {
    console.log('Enemy (thinking): I don\'t know what to show...');
    enemyShown = rockPaperBeatingMap[Math.round(Math.random() * 2)];
  }
};

const yourSymbol = () => {
  // MODIFY THIS LINE - make you choosing your symbol asynchronous
  youShown = rockPaperBeatingMap[Math.round(Math.random() * 2)];
};

// Repeats the game every 2 seconds
setInterval(() => {
  // Reset symbols from previous round
  enemyShown = null;
  youShown = null;

  // This code computes who won - DO NOT MODIFY THE CODE BELOW THAT LINE!!!
  yourSymbol();
  enemySymbol();

  // Wait 20 miliseconds to make sure that everyone shows the symbol on time
  setTimeout(() => {
    // Check if both players showed some symbol first
    if (enemyShown && youShown) {
      const yourSymbolIndex = rockPaperBeatingMap.indexOf(youShown);
      if (rockPaperBeatingMap[yourSymbolIndex + 1] === enemyShown) {
        console.log(`You lost: your ${youShown} vs enemies ${enemyShown}`);
      } else {
        console.log(`You won: your ${youShown} vs enemies ${enemyShown}`);
      }
    } else {
      console.log('No-one won - False start! (someone did not show the symbol on time)')
    }
  }, 20); // This time determines how fast you have to show your symbol. If you don't show it, it'll trigger False start!
}, 2000);
