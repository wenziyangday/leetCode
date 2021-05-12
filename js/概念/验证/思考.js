while (null) {
  console.log('dff');
}


function myIns(left, right) {
  if (typeof left !== 'object' || left === null) return false;
  let proto = Object.getPrototypeOf(left);
  while (proto) {
    if (proto === right.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
  if (proto === null) return false;
}

console.log(Object.is(10, 10));

function myIss(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}


const myEqual = {
  val: 0,
  valueOf() {
    this.val += 1;
    return this.val;
  }
}

console.log(myEqual == 1 && myEqual == 2);

function myFlatten(arr) {
  while (arr.some(Array.isArray)) {
    arr = [].concat(...arr);
  }

  return arr;
}

[1, 2, 3].some((x) => Array.isArray(x));

const myF = [1, 2, [3, [4, 5, [6], 7, [8], 9], 10, 11], 12];
console.log(myFlatten(myF));

console.log(['1', '2', '3'].map(parseInt))

console.log(parseInt('1', 0));

console.log(parseInt(Number.MAX_SAFE_INTEGER + '', 36))

// 高阶函数
// 一个以函数作为参数或者返回一个函数的函数


// this 理解
// this 通常指向离自己最近的上下文作用域
// 全局作用域： window
// 对象中函数：外部声明变量调用、直接调用
// dom 绑定：onClick、addEventListener 中this 指向当前事件绑定对象、在IE中addEvent中this 指向window
// 箭头函数中的this 指向： 指向离自己最近的上下文 箭头函数中的this 是没有具体指向的
// 对象实例化中的this 指向当前实例



const myThis = {
  a: function () {
    console.log(this);
  },
  val: 10
}

const func = myThis.a;
func();

// 直接调用
myThis.a();

