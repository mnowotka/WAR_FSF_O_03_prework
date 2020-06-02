import _ from 'lodash';

const objA = {
  a: {
    b: {
      d: 'O'
    }
  },
  c: {
    d: {
      g: 'C'
    },
    f: 'X'
  },
  h: 'P'
};

const objB = {
  a: {
    b: {
      c: 'E',
      i: 'Q'
    }
  },
  c: {
    d: {
      e: 'I'
    },
    f: 'N'
  },
  h: 'H'
};

const objC = {
  a: {
    b: {
      c: 'P'
    }
  },
  d: {
    e: 'X',
    f: 'J'
  }
};

const objD = {
  a: {
    b: {
      i: 'A',
      a0: 'T'
    }
  },
  d: {
    e: 'N',
  }
};

// Change merge order in a way that merged object consists of ALL THE LETTERS needed for creating "INCEPCJA"
// Current order - objA, objB, objC, objD - is a default one and does not guarantee ability to get all the letters
const mergedObj = _.merge(objA, objB, objC, objD);

// This is somewhat a hint - here you can see which letters are used to build "INCEPCJA"
const letterGetters = [
  'c d e',
  'd e',
  'c d g',
  'a b c',
  'h',
  'c d g',
  'd f',
  'a b i'
];

// You have to convert the getters array above so that each getter looks like that: "c.d.e"
const dashRegEx = /-/ig;
const properLetterGetters = letterGetters.map(function (letterPath) {
  // HERE - use one of case-functions (e.g. `_.toXCase()` to properly transform letter path into dash-separated one
  // Also - use replace with "dashRegEx" to replace all the dashes with dots

  // Provide proper return value once you modify the function - it should return letter path looking like "a.b.c"
  return letterPath;
});

let finalPhrase = '';
for (let phraseGetter of properLetterGetters) {
  finalPhrase += _.get(mergedObj, phraseGetter, ' ');
}

console.log(finalPhrase);
console.assert(finalPhrase === 'INCEPCJA', 'Should spell INCEPCJA!', finalPhrase);

