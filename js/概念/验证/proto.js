function Person() {

}
console.log(Person.prototype);
const p = new Person();
// console.log(p.constructor, p.__proto__, Person.prototype);
//
// console.log(p.constructor === Person);
// console.log(p.__proto__ === Person.prototype, 'l;');
// console.log(p.__proto__.constructor === Person);
// console.log(Person.prototype.constructor === Person);
//
//
// console.log(Person.prototype, Person.constructor);

console.log(Person.prototype.constructor === Person);
console.log(p.constructor === Person);
console.log(Person.constructor);
console.log(Object.constructor);
console.log(Function.prototype.__proto__)


