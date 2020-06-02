const phrases = [
  'Well, it\'s more natural than Baked Alaska or nylon socks',
  'Good question, I\'ll have to think about that',
  'Please, Mr. Music, will you play, bloop?',
  'I\'ve written a savage, angry song about jars that get separated from their lids',
  'When was the last time you could use the word bloop in its proper context?',
  'Mmm. And Michael just sort of... bleep popped up, did he',
  'A unique child delivered of a unique mother',
];

function censor(phrasesToCensor) {
  const censoredPhrases = [];

  return censoredPhrases;
}

const finalPhrases = censor(phrases);
console.assert(finalPhrases.length === 4, 'Wrong length of censored phrases:', finalPhrases.length);
console.assert(
  finalPhrases[finalPhrases.length - 1] === 'We interrupt our program right now. We will be back shortly',
  'Wrong final phrase: ', finalPhrases[finalPhrases.length - 1],
);

