const n1 = {};
const n2 = {};
console.log(n1 === n2)

function fun(cug) {
  console.log(cug, 'cug')
}

const obj = {}
fun((obj.name = '张三'))
console.log(obj.name);

const obj2 = {age: '10000'}

console.log((obj.name = obj2.age))
