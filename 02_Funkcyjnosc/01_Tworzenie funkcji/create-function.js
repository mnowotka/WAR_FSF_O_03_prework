console.log('--- NAZWA FUNKCJI: ---');

function y() {
}

// Funkcja bez nazwy - inferowanie z nazwy zmiennej
const z = function() {
};

function getThatName(func) {
  if (func.name) {
    return func.name;
  }

  let stringifiedFunc = func.toString();

  stringifiedFunc = stringifiedFunc.substr('function '.length);
  return stringifiedFunc.substr(0, stringifiedFunc.indexOf('('));
}

console.log(getThatName(y));
console.log(getThatName(z));
console.log(getThatName(function () {}));

console.log('--- FUNKCJA A ZMIENNA: ---');

function hello(who, suffix) {
  return 'Hello ' + who + suffixer(who, suffix);

  const suffixer = function suffixer(who, suffix) {
    return suffix.repeat(who.length);
  }
}

// console.log(hello('James', '!'));


