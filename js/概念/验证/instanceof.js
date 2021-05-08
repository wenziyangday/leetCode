const Person = function () {

}

const p1 = new Person();

console.log(p1 instanceof Person);
console.log(p1 instanceof Object);


class PrimitiveNumber {
  static [Symbol.hasInstance](x) {
    return typeof x === 'number';
  }
}

console.log(111 instanceof PrimitiveNumber);


