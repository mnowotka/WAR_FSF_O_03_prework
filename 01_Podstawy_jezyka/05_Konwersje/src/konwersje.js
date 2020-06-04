const pureNumber = '3.14';
const numberWithString = '3.14SomeStringHere';
const stringWithoutNumber = 'NoNumberHere';
const alreadyNumber = 3.14;

// Poniżej użyj metod z zadania - każdej do przekonwertowania każdej z powyższych stałych.
// Obserwuj różnice w rezultatach

console.log('---PONIŻEJ parseFloat: ---');
//
console.log(parseFloat(pureNumber));
console.log(parseFloat(numberWithString));
console.log(parseFloat(stringWithoutNumber));
console.log(parseFloat(alreadyNumber));

console.log('---PONIŻEJ parseInt: ---');
//
console.log(parseInt(pureNumber));
console.log(parseInt(numberWithString));
console.log(parseInt(stringWithoutNumber));
console.log(parseInt(alreadyNumber));


console.log('---PONIŻEJ konstruktor new Number(): ---');
//
const newA = new Number(pureNumber);
const newB = new Number(numberWithString);
const newC = new Number(stringWithoutNumber);
const newD = new Number(alreadyNumber);
console.log(newA);
console.log(newB);
console.log(newC);
console.log(newD);


function addToNum(num) {
  if (num === !Number) {
    throw new Error('Passed variable is not a number!')
  }
  return (num + (num*10)) ;
}

let num1 = addToNum(1);
let num2 = addToNum(25);
let num3 = addToNum(-1);
let num4 = addToNum(0);
console.log("addToNum");
console.log(num1);
console.log(num2);
console.log(num3);
console.log(num4);

