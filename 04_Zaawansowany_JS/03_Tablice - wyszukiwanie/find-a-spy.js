/**
 * Modify this spy detector using `find` to find a specific person - with ID equal `IAMASPY101010`
 */
function spyDetector(people) {
  return people[0];
}

/**
 *  Bouncer will not allow anyone to enter if at least one person is not welcome in the casino
 *  Do not modify his behaviour - try to filter "not welcome" people before they're encountered by the bouncer
 */
function bouncer(people) {
  for (let person of people) {
    if (person.isNotWelcome) {
      return [];
    }
  }

  return people;
}

const people = [
  {
    name: 'John Doe',
    isNotWelcome: false,
    id: 'JD123040'
  }, {
    name: 'Kate Rhombus',
    isNotWelcome: true,
    id: 'KR63247',
  }, {
    name: 'Dave Spy',
    isNotWelcome: false,
    id: 'IAMASPY101010',
  }, {
    name: 'Jeanette Square',
    isNotWelcome: false,
    id: 'JW43127898'
  }
];

// Modigfy this line so people that are "not welcome" won't even try to enter the casino
const peopleThatAreAllowedToEnter = people;

const peopleInTheCasino = bouncer(peopleThatAreAllowedToEnter);
const spy = spyDetector(peopleInTheCasino);
const spyName = (spy && spy.name) || 'Not found!';

console.assert(spyName === 'Dave Spy', 'Spy not found!', spyName);
