const obj = new Object();
console.log(obj.__proto__ === Object.prototype)
console.log(obj.__proto__.constructor === Object)
console.log(Object.prototype.constructor === Object)
console.log(Object.prototype.__proto__ === null)

console.log(this)
