/**
 * Generates baubles for particular tree elements
 */
function baubleGenerator(element, index) {
  if (index % 2 !== 0) {
    return '*';
  }

  return element;
}

/**
 * Helper function for adding e.g. tree stump or the star on the top
 * Inserts element exactly in the middle of the row and fills row with whitespaces otherwise
 */
function insertInTheMiddle(rowLength, characters) {
  const whitespaceAmount = rowLength - characters.length;
  const whitespaceOnSides = Math.ceil(whitespaceAmount / 2);

  return (
    ' '.repeat(whitespaceOnSides) +
    characters +
    ' '.repeat(whitespaceOnSides)
  );
}

const treeElements = [
  '#######',
  '#####',
  '###',
  '#'
];

function cTree(elements) {
  // Copy input (to mutate new table instead of input - passing by reference!)
  const treeSections = elements.slice();

  // Find longest element - needed to center the tree in the console
  const longestElement = treeElements.reduce(function (memo, element) {
      return element.length > memo ? element.length : memo ;
    },
    0);

  let treeRows = [];

  // Insert star on the top
  treeRows.push(insertInTheMiddle(longestElement, '★'));

  // Here we generate the main tree
  while (treeSections.length) {
    // MODIFY THIS ROW - mutate "treeSections" in a way that it shifts or pops the elements in tree sections
    const currentRow = treeSections.shift();

    // Maps current row String to Array of row elements (essentially array of hashes, e.g. "['#', '#', '#']"
    const rowElements = currentRow.split('');

    // MODIFY THIS ROW - use map function here - add baubles to "rowElementsWithBaubles"
    const rowElementsWithBaubles = rowElements;

    const rowWithBaubles = rowElementsWithBaubles.join('');

    treeRows.push(insertInTheMiddle(longestElement, rowWithBaubles));
  }


  // Add tree stump at the end
  treeRows.push(insertInTheMiddle(longestElement, '∏'));

  return treeRows.join('\n');
}

console.log(cTree(treeElements));
