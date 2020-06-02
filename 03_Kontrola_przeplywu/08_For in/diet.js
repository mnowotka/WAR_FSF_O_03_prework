const diets = {
  carnivore: ['Lion', 'Venus flytrap', 'Tiger', 'Falcon'],
  omnivore: ['Human', 'Pig', 'American crow', 'Bear'],
  herbivore: ['Deer', 'Crab', 'Bee', 'Koala']
};

// Bazowa fraza - użyj jej do budowania dalszych fraz
const basePhrase = 'Following animals are ';

/**
 * Zaimplementuj poniższą funkcję tak, aby wygenerować frazy, których oczekuje asercja
 * @param dietTypes
 */
function summarizeDiets(dietTypes) {
  // Przygotowujemy zmienną na frazy
  const phrases = [];

  // Tutaj umieść swój kod

  return phrases;
}

const summaries = summarizeDiets(diets);

console.assert(summaries && summaries.length === 3, 'Wrong length of summaries!');
console.assert(summaries[0] === 'Following animals are carnivores: Lion, Venus flytrap, Tiger, Falcon', 'Phrase incorrect!');
console.assert(summaries[1] === 'Following animals are omnivores: Human, Pig, American crow, Bear', 'Phrase incorrect!');
console.assert(summaries[2] === 'Following animals are herbivores: Deer, Crab, Bee, Koala', 'Phrase incorrect!');
