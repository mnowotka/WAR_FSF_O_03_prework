// Ready to use RegExp phrases. Use them with "replace()" function to teach John some manners!
const exclamations = /!/ig;

/**
 * Teaches rude people manners
 * Modify the function code so that the person is polite
 */
function teachManners(phrase) {
  return phrase;
}

const johnSentences = [
  '     !I LOVE MUSSELS!!!!   ',
  ' !!!I DON\'T THINK HE\'S GOING TO RUN AGAIN!        ',
  ' !!I FANCY LISTENING TO BEATLES!!!       '
];

const sentence1 = teachManners(johnSentences[0]);
const sentence2 = teachManners(johnSentences[1]);
const sentence3 = teachManners(johnSentences[2]);

console.assert(sentence1 === 'i love mussels', 'He\'s not behaving well: ', sentence1);
console.assert(sentence2 === 'i don\'t think he\'s going to run again', 'He\'s not behaving well: ', sentence2);
console.assert(sentence3 === 'i fancy listening to beatles', 'He\'s not behaving well: ', sentence3);
