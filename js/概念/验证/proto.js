function Person() {

}
console.log(Person.prototype);
const p = new Person();
console.log(Person.prototype.constructor === Person);
console.log(p.constructor === Person);
console.log(Person.constructor);
console.log(Object.constructor);
console.log(Function.prototype.__proto__)


