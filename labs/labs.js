function S() {

}

const s = new S();

console.log(s instanceof S)


function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car('Honda', 'Accord', 1998);

console.log(auto instanceof Car);


console.log({} instanceof Object);
console.log({}.constructor === Object);

auto.constructor = S;
console.log(auto instanceof Car);
console.log(Object.prototype.toString.call(Car))
console.log(Object.toString.call(Car))

