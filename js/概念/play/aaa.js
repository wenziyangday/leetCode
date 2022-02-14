const strArr = [...'hello'];
console.log('strArr', strArr);
const setArr = [...new Set([...'hello'])];
console.log('setArr', setArr)

Number.prototype[Symbol.iterator] = function* () {
  let i = 0;
  let num = this.valueOf();
  while (i < num) {
    yield i += 1;
  }
}
console.log('Symbol.iterator', [...5]);

const obj = [[1, 'one'], [2, 'two'], [3, 'three']];
console.log('Object.keys', Object.keys(obj));
const map = new Map(obj);
console.log('map.keys()', map.keys());
console.log('map.keys() 扩展运算符', [...map.keys()]);
console.log('map.values()', map.values());
console.log('map.values() 扩展运算符', [...map.values()]);

const set = new Set([1, 2, 3, 4, 1, 4, 5]);
console.log('set.keys', set.keys());
console.log('set.keys 扩展运算符', [...set.keys()]);
console.log('set.values', set.values());
console.log('set.values 扩展运算符', [...set.values()]);

const go = function* () {
  yield 1;
  yield 2;
  yield 3;
}

console.log(go());
console.log('Generator', [...go()]);

console.log(Array.from({length: 4}, x => 'aaa'));

// 避免超出码点\uFFFF的Unicode字符串，计算成两个字符的bug
console.log(Array.from('\u0000\u7777').length);

/**
 * @description Array.of 实现
 * */
function ArrayOf() {
  return [].slice.call(arguments);
}

console.log('Array.of 实现', ArrayOf(1, 2))



