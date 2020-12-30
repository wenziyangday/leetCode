
const fn = function () {

}

let fnObj = new fn();



// 1. 创建一个空的实例对象
const fnO = new Object();

// 2.将该对象的原型
fnO.__proto__ = fn.prototype;

// 3.
const result = fn.call(fnO);

// 4.

if (typeof result === "object") {
  fnObj = result;
} else {
  fnObj = fnO;
}


const obj = {};
obj.prop = 'hasOwnProperty/in 区别'

// true
console.log('toString' in obj);
// true
console.log('prop' in obj);

// false
console.log(obj.hasOwnProperty('toString'))
// true
console.log(obj.hasOwnProperty('prop'))

