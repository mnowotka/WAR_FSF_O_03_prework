const BLADE_CHARACTER = 'Ξ';
const SWORD_PATTERN = '{}oo((X))>';

/**
 * Should generate sword with proper blade length
 */
function sword(length) {
  // First = create array from sword pattern

  // Second - create two arrays from sword pattern array

  // Third = create blade pattern, using `Array(x).fill(''); with proper length and character

  // Fourth - concatenate the arrays and join with empty character, using `join('')`
  return SWORD_PATTERN;
}

const shortSword = sword(5);
console.assert(shortSword === '{}oo((X))ΞΞΞΞΞ>', 'Sword does not look properly: ', shortSword);

const longSword = sword(15);
console.assert(longSword === '{}oo((X))ΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞ>', 'Long sword does not look properly: ', longSword);
