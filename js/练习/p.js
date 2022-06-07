/** 日期 */
const date = new Date();
console.log(+date)
console.log('年', date.getFullYear());
console.log('月', date.getMonth());
console.log('日', date.getDate());
console.log('时', date.getHours());
console.log('分', date.getMinutes());
console.log('秒', date.getSeconds());
console.log('周 中天', date.getDay());

/** 获取数组中最大值 */
const arr = [1, 100, 10, 40, 30];
console.log('最大值', Math.max(...arr));
console.log('最大值', Math.max.apply(null, arr));
console.log('最大值', Math.max.call(null, ...arr));


const bar = function () {
  console.log(this, this.x);
  return this.x;
}

const foo = {
  x: 10
}

const sed = {
  x: 100
}

const fiv = {
  x: 1000
}


/**
 * func.bind(obj, ...args)(...args2);
 * @description 返回一个函数并将函数中的this指向bind的第一个参数
 * TODO 进行多次bind的绑定this始终指向第一次绑定(原因是在第一次绑定的时候this的指向已经确定)
 * 个人理解：从执行角度来说：先进行函数执行位，然后找函数实现，（如果进行多次绑定）再进行往后查找
 * 第一次执行时func1中的this指向了sed，但是func1 中中的this指向了foo，此时this指向变了
 * */
Function.prototype.myBind = function (obj, ...args) {
  const self = this;
  return (...rest) => {
    return self.call(obj, ...args, ...rest);
  }
}

const func = bar.myBind(foo);
const func1 = func.myBind(sed);
func1();


/**
 * apply 调用一个改变this指向的函数并返回计算后的值，
 * fn.apply(obj, args)
 * args[]类数组
 * */
Function.prototype.myApply = function (o, args) {
  o.fn = this;
  return o.fn(...args);
}

const funcApply = bar.myApply({x: 'funcApply'}, []);
console.log(funcApply, 'funcApply');

/**
 * call 调用一个改变this指向的函数并返回计算后的值，
 * fn.call(obj, ...args)
 * args[]类数组
 * */
Function.prototype.myCall = function (o, ...args) {
  o.fn = this;
  return o.fn(...args);
}

const funcCall = bar.myApply({x: 'funcCall'}, []);
console.log(funcCall, 'funcCall');


/**
 * new P，和 new P() 都是对对象进行实例化，在通过表达式进行实例化时，没有任何区别
 * 但是在进行直接实例属性调用时会有问题，报错，由此看来new的构造函数后跟括号优先级会提升
 * */

function Parent() {
  this.name = '张三'
}

const p1 = new Parent;
const p2 = new Parent();
console.log(p1.name, p2.name, p1 instanceof Parent, 'p1-p2')

// console.log(new Parent.name, new Parent().name, p1 instanceof Parent, 'p1-p2')

/**
 * new 的实现原理
 * 1.创建一个空的对象{}
 * 2.为步骤1新建的对象添加属性__proto__, 将该属性链接至构造函数的原型对象上
 * 3.将步骤1新创建的对象作为this
 * 4.如果该函数没有返回对象，则返回this
 * */

function myNew(Fn, ...args) {
  const obj = new Object();
  obj.__proto__ = Fn.prototype;
  const res = Fn.call(obj, ...args);
  return res instanceof Object ? res : obj;
}






