// These variables track your progress. If you get any cursed item, you lose
let touchedCursedItem = false;
let treasurePieces = 0;
let browsedItems = {};

/**
 * This object is a special "guard" - it watches over the treasure
 * If you touch more than you should, it will notify the tests!
 */
const treasureGuard = {
  get: function(target, name) {
    if (name in target) {
      const val = target[name];

      if (typeof name === 'string' && typeof val === 'string') {
        browsedItems[name] = true;
        // Guard will return cursed item once improper item was touched
        if (val !== 'gold') {
          return 'CURSE';
        } else {
          treasurePieces++;
          return val;
        }
      } else {
        return val;
      }
    } else {
      return undefined;
    }
  },
  set: function() {

  }
};

const TREASURE = ['rubbish', 'gold', 'dirt', 'diamonds', 'gold'];

const guardedTreasure = new Proxy(TREASURE, treasureGuard);

const treasurePedestal = {
  get lowerLevel() {
    touchedCursedItem = true;
    return { treasure: 'golden-chain' };
  },
  get pillar() {
    touchedCursedItem = true;
    return { encasing: ['golden-coins', 'diamonds'] };
  },
  get top() {
    return { base: guardedTreasure };
  }
};

// This is your pocket - put gold lumps deep in the pocket (before 'hair-pin')
let scavengerPocket = ['hair-pin', 'rope', 'car-keys'];

// HERE - use destructuring of object and array to get ONLY GOLD LUMPS!

if (scavengerPocket[scavengerPocket.length -1] === 'gold') {
  scavengerPocket.pop();
  console.warn('YOU JUST LOST ONE OF YOUR GOLD LUMPS!');
}

// Checks if you touched cursed part of the pillar
console.assert(touchedCursedItem === false, 'YOU ARE CURSED!!!', touchedCursedItem);

// Checks if your pocket looks properly
console.assert(scavengerPocket.length === 5, 'Your pocket does not consist of proper items!', scavengerPocket);
console.assert(scavengerPocket[0] === 'gold' && scavengerPocket[1] === 'gold', 'You did not put gold lumps deep enough!', scavengerPocket);

// Checks if you got something cursed
console.assert(!scavengerPocket.includes('CURSE'), 'Got something cursed!', scavengerPocket);

// Checks if you used destructuring to get the gold - all the items would be touched in that case
console.assert(Object.keys(browsedItems).length === 5, 'You did not properly get the gold', browsedItems);

// Checks if you got only two lumps of gold and nothing more
console.assert(treasurePieces === 2, 'You took something else...', treasurePieces);
