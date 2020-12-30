// 对象中出现undefined 会舍弃该属性
console.log(JSON.stringify({a: undefined}));  // {}

// 对于出现在数组中的undefined, 会转化为null
console.log(JSON.stringify({a: [1, 2, 3, 4, undefined, 6]}))  // {"a":[1,2,3,4,null,6]}s

// 对象中出现的函数 会舍弃该属性
console.log(JSON.stringify({
  a: function () {
    console.log('12');
  }
}));

// 对于出现在数组中的函数, 会转换成null
console.log(JSON.stringify({
  a: [1, 2, 3, 4, function () {
    console.log('as');
  }, 8]
}));

// 对于NaN, Infinity, -Infinity 无论出现在数组或者对象中 都会转换成null
console.log(JSON.stringify({a: NaN, b: Infinity, c: -Infinity, d: [NaN, Infinity, -Infinity]}));  // {"a":null,"b":null,"c":null,"d":[null,null,null]}

// 对于new 操作符进行的实例化对象
console.log(JSON.stringify({
  a: new String(123),
  b: new Number('123'),
  c: new Boolean('as'),
  d: new Function('sd'),
  f: [
    new String(123),
    new Number('123'),
    new Boolean('as'),
    new Function('sd')
  ]
}));  // {"a":"123","b":123,"c":true,"f":["123",123,true,null]}

// 对于Symbol 在对象中则会直接过滤掉、 在数组中都会转化为null
console.log(JSON.stringify({a: Symbol('23'), b: [Symbol('sd'), '数据库可']})) //  {"b":[null,"数据库可"]}


