function myIns(left, right) {
  if (left === null || typeof left !== 'object') return false;

  let proto = Object.getPrototypeOf(left);
  while (proto) {
    if (proto === null) return false;
    if (proto === right.prototype) return true;
    proto = Object.getPrototypeOf(proto);
  }
}


// Object.is()
function myIs(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    // NaN
    return x !== x && y !== y;
  }
}

// a == 1 && a == 2 true, 一个对象转化为基本类型的运行过程
const aa = {
  value: 0,
  valueOf() {
    this.value += 1;
    return this.value;
  }
}
console.log(aa == 1 && aa == 2);

// 数组扁平化
const arr = [1, 2, [3, 4, 5, [6, 7, [8, 9], 10], 11], 12];

let result = [];
while (result.some(Array.isArray)) {
  result = [].concat(...result);
}
