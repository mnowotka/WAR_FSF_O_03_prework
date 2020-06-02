/**
 * Wyszukuje książki w kolejce książek, zaczynając od końca - podobnie jak szukanie książek ułożonych jedna za drugą
 * w pudełku - kiedy nie widzisz ich grzbietów
 **/
function findBooks(books, bookTooLookFor, numTries = 1) {
  console.log('Looking for "' + bookTooLookFor + '" in ' + books.length + ' books...');
  if (!books.length) {
    console.log('Book not found, box is already empty!');
    return false;
  }

  const lastBook = books.shift();
  console.log('Taking "' + lastBook + '" from the box');

  if (lastBook === bookTooLookFor) {
    console.log('Found the book: "' + lastBook + '" after ' + numTries + ' tries');
    return true;
  }

  // Spróbuj znaleźć książkę ponownie, wywołując funkcję rekurencyjnie. Zauważ zwiększenie liczby prób o jeden
  return findBooks(books, bookTooLookFor, ++numTries);
}

// Kolekcja może nie imponująca, ale wartościowa!
const myBookCollection = [
  'To Kill a Mockinbird',
  'Don Quixote',
  'Moby Dick',
  'Anna Karenina',
  'The Great Gatsby',
  'One Hundred Years of Solitude',
  'Ulisses',
  'War and Peace',
];

// Poniżej umieść wywołania funkcji "findBooks". Pamiętaj o dodaniu śledzenia stosu z zadania!
