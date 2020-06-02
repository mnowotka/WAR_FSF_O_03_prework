/**
 * Visitor counter
 * Increments internal value every time when some code accesses `count()` computed property
 */
const counter = {
  get count() {
  },
  set count(val) {
  },
};

// Test initial value
const initialCount = counter.count;
console.assert(initialCount === 1, 'Should increment value and return 1: ', initialCount);

// Test setting the value
counter.count = 1437;
const currentCount = counter.count;
console.assert(currentCount === 1438, 'Should increment value and return next (1438): ', currentCount);

// Test another increment
const nextCount = counter.count;
console.assert(nextCount === 1439, 'Should increment value and return next (1439): ', nextCount);
