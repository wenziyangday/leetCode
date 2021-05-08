/**
 * @param left 一个对象的实例
 * @param right 一个对象的原型对象
 * */


function myInstanceof(left, right) {
  if (left === null || typeof left !== 'object') return false;

  let proto = Object.getPrototypeOf(left);

  while (true) {

    if (proto === null) return false;

    if (proto === right.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}


function Person() {}
const p1 = new Person();
// console.log(myInstanceof(p1, Person));
// console.log(Object.getPrototypeOf(p1), p1.__proto__, Object.getPrototypeOf(p1) === p1.__proto__);
// console.log(Person.prototype, Person.prototype === p1.__proto__, Person.prototype === p1.__proto__.prototype, Person.prototype.prototype === p1.__proto__.prototype);
// console.log(Person.prototype.prototype);
// console.dir(p1.__proto__);
// console.dir(p1.__proto__.__proto__);
console.dir(Person.prototype.__proto__);

console.log(p1.__proto__.__proto__)
