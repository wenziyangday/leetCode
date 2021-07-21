/**
 * instanceof 用于检测构造函数的prototype属性是否存在于某个实例对象的原型链上
 * */

function Car() {
}

const car = new Car();
console.log(car instanceof Car);

function myInstanceOf(left, right) {
  let prototype = right.prototype;
  let _proto = left.__proto__;
  while (true) {
    if (!left) return false;
    if (prototype === _proto) return true;
    _proto = _proto.__proto__;
  }
}

console.log(myInstanceOf(car, Car));

console.log(car.__proto__);
console.log(car.constructor.prototype);
console.log(car.constructor.prototype === car.__proto__);
console.log(car.constructor === Car)
console.log(car.__proto__.__proto__ === Object.prototype);



