import _ from 'lodash';

// Use this value in your throttle function
const SNOOZE_TIME = 200;

// This variable tracks how many times snooze generated the phrase. It should only do it once!
let snoozePhrasesGenerated = 0;
let snoozeCalledTimes = 0;

// There variables are used for checking the timings
let startTime = new Date();
let lastTimer;

/**
 * Memoize this function!
 */
function getSnoozePhrase(time) {
  snoozePhrasesGenerated++;
  return 'Wake up! It\'s already ' + time + '!';
}

const getSnoozeWithMemory = getSnoozePhrase;

/**
 * Use _.throttle with this function to make sure it's not called too often
 */
function snooze(time) {
  const phrase = getSnoozeWithMemory(time);
  console.log(phrase);

  // Update last timer
  lastTimer = new Date();
  snoozeCalledTimes++;
}

// HERE - modify this line
const snoozeWithDelays = snooze;

function alarm(time, howManyTimes) {
  startTime = new Date(); // Set beginning of the

  const totalTime = SNOOZE_TIME * (howManyTimes - 1); // We deduct 1, as snooze will be called at 0, 200, 400 etc (including 0)

  while (new Date().valueOf() - startTime.valueOf() < totalTime) {
    snoozeWithDelays(time);
  }
}

alarm('08:00', 3);

// This checks whether snooze was not called too fast
// We wait for at least 800ms to check the results - all three snooze()'s should be ran in about 400-430ms
setTimeout(() => {
  console.assert(snoozePhrasesGenerated === 1, 'Should only generate phrase once!', snoozePhrasesGenerated);

  const timeElapsedFromStartToLast = lastTimer.valueOf() - startTime.valueOf();
  console.assert(timeElapsedFromStartToLast >= 400, 'Snooze did not wait enough!', timeElapsedFromStartToLast);

  console.assert(snoozeCalledTimes === 3, 'Snooze should be called only 3 times!', snoozeCalledTimes);
}, 800);
