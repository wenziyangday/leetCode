/** 变量提升 && 暂时性死区 */
try {
  console.log(bb);
  var bb = 1;

  console.log(cc);
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
  console.log(aa);

  if (true) {
    var aa = '1212';
  }
}

coverByInner();

/** 用于计数的循环变量泄露为全局变量 */
var s = 'hello';

for (var i = 0; i < s.length; i++) {
  console.log(s[i]);
}

console.log(i);

/** ES6的块级作用域 */
{
  let block = '外层';

  if (true) {
    let block = '内层';
  }

  console.log(block);
}


