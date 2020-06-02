const KEYWORD = 'OKON';

function secretCodeDetector(phrases) {
  let trackedLetters = '';
  let shouldTrackPhrase = false;
  const codePhraseLength = KEYWORD.length;

  for (let phrase of phrases) {
    // This clause waits for the first letter of keyword
    if (!shouldTrackPhrase) {
      // Implement your code here - get first letter. use `startsWith()`
      let firstLetterIsCodewordBeginning = false;

      // If we encounter first tracked letter - start looking for the keyword
      if (firstLetterIsCodewordBeginning) {
        trackedLetters += phrase[0];
        shouldTrackPhrase = true;
      }
    } else {
      // This extends tracked phrase by the next letter
      trackedLetters += phrase[0];
    }

    // This resets phrase if it's not found - you don't have to modify the clause
    if (trackedLetters.length >= codePhraseLength) {
      // Here you should detect if the phrase was properly found
      // Modify "if" clause in a way that it'll detect "OKON" keyword
      if (false) {
        return true;
      }

      trackedLetters = '';
      shouldTrackPhrase = false;
    }
  }

  return false;
}

const phrases = [
  'Od razu mówię - nie',
  'Kowalski coś powinien wiedzieć',
  'Olałem to już dawno temu',
  'Chciałbym Ci pomóc, ale jestem tylko salesem', // Note - this phrase breaks the pattern!
  'Ola wie więcej o tym temacie',
  'Klub pingpongowy? Świetny pomysł!',
  'Od razu chciałem wejść w tą inicjatywę',
  'Nie bardzo wiem, jak zacząć to zadanie...', // This is the last phrase - detector should find it!
  'Cieszę się, że mogliśmy razem współpracować nad tym tematem'
];

const foundLastSecretPhrase = secretCodeDetector(phrases);

const phrases2 = [
  'Oj tam, oj tam',
  'Kraków to naprawdę ładne miasto',
  'Nie chciałbym przeszkadzać?',
  'Olimpiada dopiero za cztery lata!',
  'Kajakarstwo - to mój sport',
  'Od dziecka kochałem kontakt z wodą',
  'Jeździłem z tatą łowić okonie', // This is not a codeword! It's just included in the phrase, not as a first letter.
  'Nie wyobrażam sobie życia daleko od jeziora'
];

const foundLastSecretPhrase2 = secretCodeDetector(phrases2);

console.assert(foundLastSecretPhrase === true, 'Phrase should be found!', foundLastSecretPhrase);
console.assert(foundLastSecretPhrase2 === false, 'Phrase should not be found!', foundLastSecretPhrase2);
