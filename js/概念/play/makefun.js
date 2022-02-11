/** 变量提升 && 暂时性死区 */
try {
  console.log('变量提升', bb);
  var bb = 1;

  console.log('暂时性死区', cc);
  let cc = 'nnj';
} catch (e) {
  console.log(e);
}

/**
 * @description 块级作用域描述
 * */

/** 内层变量覆盖外层变量 */
var aa = 1;

function coverByInner() {
  console.log('内层变量覆盖外层变量', aa);

  if (true) {
    var aa = '1212';
  }
}

coverByInner();

/** 用于计数的循环变量泄露为全局变量 */
var s = 'hello';

for (var i = 0; i < s.length; i++) {
  console.log('用于计数的循环变量泄露为全局变量', s[i]);
}

console.log('用于计数的循环变量泄露为全局变量', i);

/** ES6的块级作用域 */
{
  let block = '外层';

  if (true) {
    let block = '内层';
  }

  console.log('ES6的块级作用域', block);
}

/** 数值分隔符 */
const num = 100_000_000_000;
console.log(num, 'num');
const num2 = 0b1010_0001_1000_0101;
console.log(num2, 'num2');
const num3 = 0xA0_B0_C0;
console.log(num3, 'num3');
