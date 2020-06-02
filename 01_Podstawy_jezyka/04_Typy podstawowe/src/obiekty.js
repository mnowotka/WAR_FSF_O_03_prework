// Tworzymy funkcję budującą
function Builder() {
  this.x = 'Hello';
}

Builder.prototype.y = 'World!';
Builder.prototype.objProp = {};

// Funkcja tak naprawdę jest konstruktorem swoich "dzieci" - jej prototyp stanie się właściwościami obiektów z niej zbudowanych
console.log(Builder === Builder.prototype.constructor); // true
