// Boolean
const isBool = true;
console.log(isBool);
console.log(!isBool);
console.log('---');

// Null
const nil = null;
console.log(nil);
console.log(nil === isBool);
console.log('---');

// Undefined
let und;
console.log(und);
und = null;
console.log(und);
console.log(und === nil);
und = undefined; // Przypisanie `undefined` to to samo, co zresetowanie zmiennej do wartości przed przypisaniem!
console.log(und);
console.log('---');

// Number
let num = 123;
console.log(num);

// Pamiętaj, że w JS do zmiennej możesz przypisać, co chcesz - może to być problematyczne! Staraj się przetrzymywać w danej zmiennej jeden typ.
num = '123';
console.log(num);
num = 456.789; // Float - zmienna zmiennoprzecinkowa, nadal jest to numer!
console.log(num);

// "Kontener" numerów - obiekt, wzbogacający prymityw o dodatkowe metody
console.log('-');
const numContainer = new Number(num);
console.log(numContainer);
console.log(numContainer === num);
console.log(numContainer.valueOf() === num);
console.log('---');

// String
const text = 'Hello World';
const text2 = "Hello World";
const text3 = 'Hello "WORLD"'; // Zauważ, że można używać cudzysłowia wewnątrz zmiennej znakowej zbudowanej z innych delimiterów
const text4 = 'Hello \'World\''; // Backspace jako sposób na użycie takich samych znaków wewnątrz zmiennej
const text5 = `${text4}!`; // Template string

console.log(text);
console.log(text2);
console.log(text3);
console.log(text4);
console.log(text5);
console.log(text4 + '!' === text5); // Po dodaniu wykrzyknika - są to zmienne o tej samej wartości, mimo, iż różnie stworzone

// "Kontener" string-ów - dodaje dodatkowe metody
console.log('-');
const strContainer = new String(text5);
console.log(strContainer);
console.log(strContainer === text5);
console.log(strContainer.valueOf() === text5);
console.log('---');

// Symbol
const sym = Symbol('TestSymbol');
console.log(sym);
