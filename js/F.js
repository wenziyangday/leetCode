function F1() {

}

console.log(F1.constructor === Object.constructor, Object.__proto__ === Function.prototype);
console.log(Function.prototype.__proto__ === Object.prototype);

