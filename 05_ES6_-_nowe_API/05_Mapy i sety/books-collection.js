// HERE - implement Map of Sets to store the books - it should be an empty `Map` without any content
let booksCollection;

//  HERE - implement the functions below
function hasBook(category, title) {
  return false;
}

function putBook(category, title) {
  return false;
}

function removeBook(title) {
  return title;
}

/**
 * TESTS BELOW
 */

// Creates empty map with empty set if it's not properly implemented - for the tests to run properly
booksCollection = booksCollection || new Map([['fantastyka', new Set()], ['beletrystyka', new Set()]]);

// Check initial size
console.assert(booksCollection.size === 0, 'Books collection should be empty at the beginning', booksCollection.size);

// Put a few books in the collection
const firstPutResult = putBook('fantastyka', 'Lord of The Rings');
console.assert(firstPutResult === true, 'Should return true if book is successfully added', firstPutResult);
console.assert(booksCollection.get('fantastyka').size === 1, 'Should have the size of category equal 1', booksCollection.get('fantastyka').size);

// Check adding multiple times
const putResult = putBook('beletrystyka', 'Lord of The Rings');
console.assert(putResult === true, 'Should return success on inserting new book to the category', putResult);
console.assert(booksCollection.get('beletrystyka').size === 1, 'Should have only one book in "beletrystyka"', booksCollection.get('beletrystyka').size)
const repeatedPutResult = putBook('beletrystyka', 'Lord of The Rings');
console.assert(repeatedPutResult === false, 'Should return false if book already exists in the set', repeatedPutResult);
console.assert(booksCollection.get('beletrystyka').size === 1, 'Should not change size of "beletrystyka"', booksCollection.get('beletrystyka').size)

// Removing from all categories
const removeResult = removeBook('Lord of The Rings');
console.assert(removeResult === 'Lord of The Rings', 'Should remove all "Lord of The Rings" from all the collections', removeResult);
console.assert(booksCollection.size === 0, 'Should have size of 0 again', booksCollection.size);


