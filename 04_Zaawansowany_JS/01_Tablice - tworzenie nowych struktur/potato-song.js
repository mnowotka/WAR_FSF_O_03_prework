const part1 = [1, [2, [[3]]]];
const part2 = [4, [[5]]];
const part3 = [[[[6]]]];

// HERE - modify the code so that all the parts compose one flat array:
const wholeSong = [part1, part2, part3];

function potatoSong(numbers) {
  let phrases = [];
  for (let num of numbers) {
    if (num === 1) {
      phrases.push(num + ' potato');
    } else {
      phrases.push(num + ' potatoes');
    }
  }

  phrases.push('more!');

  // HERE - transform the phrases so that the function returns only one string instead of array:
  return phrases;
}

// Do not modify code below!
const expectedPhrase =  '1 potato, 2 potatoes, 3 potatoes, 4 potatoes, 5 potatoes, 6 potatoes, more!';
console.assert(potatoSong(wholeSong) === expectedPhrase, 'Phrase does not match!', potatoSong(wholeSong));
