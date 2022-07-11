/**
 * new 创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例
 *     步骤：
 *        1.创建一个空的简单的Javascript对象，即 {}
 *        2.链接该对象（设置该对象的constructor）到另一个对象
 *        3.将步骤1新创建的对象作为this的上下文
 *        4.如果该函数没有返回对象，则返回this
 * */

const myNew = function (fn, ...args) {
  let obj = new Object();
  obj.constructor = fn;
  const res = fn.apply(obj, args);
  return res instanceof Object ? res : obj;
}

function Person(name, age, pas) {
  this.name = name;
  this.age = age;
  this.pas = pas;
}

const aa = new Person('张三', 100, 90);
console.log(aa);

const bb = myNew(Person, '张三的个');
console.log(bb.name);
