const name = {
  name: null,
  age: null
}

function say(name, age) {
  this.name = name;
  this.age = age;
}


say.call(name, '张三', 300, 'sdd');
console.log(name.name);
console.log(name.age);
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++');


say.bind(name, '李四', 600)(this);
console.log(name.name);
console.log(name.age);
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++');


say.apply(name, ['王二', 700]);
console.log(name.name);
console.log(name.age);
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++');
