const BLADE_CHARACTER = 'Ξ';
const SWORD_PATTERN = '{}oo((X))>';

/**
 * Should generate sword with proper blade length
 */
function sword(length) {
  // First - create two string variables from sword pattern

  // Prepare the blade

  // Glue the parts together and return whole sword
  return SWORD_PATTERN;
}

const shortSword = sword(5);
console.assert(shortSword === '{}oo((X))ΞΞΞΞΞ>', 'Sword does not look properly: ', shortSword);

const longSword = sword(15);
console.assert(longSword === '{}oo((X))ΞΞΞΞΞΞΞΞΞΞΞΞΞΞΞ>', 'Long sword does not look properly: ', longSword);
