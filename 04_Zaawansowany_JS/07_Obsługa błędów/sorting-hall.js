// Conveyor belts that will handle packages further
const conveyor1 = []; // This is a standard conveyor
const conveyor2 = []; // This is your fallback conveyor - use it for the packages that are too big
const brokenPackages = []; // This is already existing conveyor for broken packages - check `try/catch` in global handling code

/**
 * Sorts the package by passing to correct conveyor or throws an error
 * Do not modify this function!
 */
function sortPackage(package) {
  if (package.broken) {
    const err = new Error('Broken package');
    err.package = package; // Add package to the exception - so that we may handle this broken package further
    throw err;
  } else if (package.size < 20) {
    conveyor1.push(package);
  } else {
    throw new Error('Need manual interaction');
  }
}

const packages = [{
  id: 'waw132243',
  size: 15,
}, {
  id: 'kat332489',
  size: 21,
}, {
  id: 'szc943894',
  size: 12,
}, {
  id: 'kra809444',
  size: 32,
}, {
  id: 'wro084325',
  size: 40,
}, {
  id: 'gda423145',
  size: 12,
  broken: true,
}];

try {
  for (let package of packages) {
    // HERE - add your error handling code
    sortPackage(package);
  }
} catch (err) {
  if (err.message === 'Broken package') {
    brokenPackages.push(err.package);
  } else {
    throw err;
  }
}

console.assert(brokenPackages.length === 1, 'Should have one broken package', brokenPackages.length);
console.assert(brokenPackages[0] && brokenPackages[0].passthroughUsed === true, 'Should have info about passthrough', brokenPackages[1]);
console.assert(conveyor1.length === 2, 'Should handle two packages!', conveyor1.length);
console.assert(conveyor2.length === 3, 'Should handle three packages as a fallback!', conveyor2.length);
