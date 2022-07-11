const array = new Array(10).fill(100).map((_x, index) => {
  return {name: '张三' + index, age: index, sex: index / 2 === 0 ? '男' : '女', per: null};
});

const a = JSON.stringify(array, ['name']);
console.log(JSON.parse(a));

const b = JSON.stringify(array, function (key, val) {
  return val;
});

console.log(JSON.parse(b));
