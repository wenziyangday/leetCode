/** 基本用法，监听对象属性的获取与修改 */
const egObj = {
  a: 1,
  b: 2,
  c: 3
};
const obj = new Proxy(egObj, {
  get: function (target, p, receiver) {
    console.log('get', target, p, receiver);
    return Reflect.get(target, p, receiver);
  },
  set: function (target, p, value, receiver) {
    console.log('set', target, p, value, receiver);
    return Reflect.set(target, p, value, receiver);
  }
});

console.log('----------proxy----------', obj.a);
++obj.a;
console.log('----------proxy2---------', obj.a);

/** 利用 Proxy，可以将读取属性的操作（get），转变为执行某个函数，从而实现属性的链式操作。 */
// var double = n => n * 2;
// var pow    = n => n * n;
// var reverseInt = n => n.toString().split("").reverse().join("") | 0;
//
// var pipe = function (value) {
//   var funcStack = [];
//   var oproxy = new Proxy({} , {
//     get : function (pipeObject, fnName) {
//       if (fnName === 'get') {
//         return funcStack.reduce(function (val, fn) {
//           return fn(val);
//         },value);
//       }
//       console.log(fnName);
//       funcStack.push(fnName);
//       return oproxy;
//     }
//   });
//
//   return oproxy;
// }
//
//
//
// console.log(pipe(3).double.pow.reverseInt.get); // 63

/** construct()方法中的this指向的是handler，而不是实例对象。 */
const handler = {
  construct: function (target, args) {
    console.log(this === handler);
    return new target(...args);
  }
}

const Construct = new Proxy(function () {
}, handler);
new Construct();

/** 使用 Proxy 实现观察者模式 */
const queuedObservers = new Set();
const observable = (obj) => new Proxy(obj, {set});
const observe = fun => queuedObservers.add(fun);

function set(target, key, value, receiver) {
  const result = Reflect.set(target, key, value, receiver);
  queuedObservers.forEach(observer => observer());
  return result;
}

/** 1.观察数据对象 */
const person = observable({
  name: '张三',
  age: 200,
});


function log() {
  console.log(`name: ${person.name}, age: ${person.age}`)
}

/** 3.函数就会立即执行 */
observe(log);

/** 2.一旦数据对象有变化 */
person.name = "快乐";
person.age = "123";

/** 实现一个观察者模式 */
const queuesStack = new Set();
const autoFun = fun => queuesStack.add(fun);

function log2() {
  console.log(`name: ${newPerson.name}, age: ${newPerson.age}`)
}

const observeObj = obj => new Proxy(obj, {
  set(target, p, value, receiver) {
    const result = Reflect.set(target, p, value, receiver);
    queuesStack.forEach(fun => fun());
    return result;
  }
});
const newPerson = observeObj({
  name: '新新人类',
  age: 1000,
});
autoFun(log2);

newPerson.name = 100;






