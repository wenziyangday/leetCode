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

/**
 *  Map 和 Object
 *  Object 是一个顶层的对象，同时还是一个构造函数，可以通过new Object() 创建一个对象实例
 *  Map是Object的子类，可以有序保存任意类型的数据，通过键值对进行数据保存，其键可以是任意类型的数据
 *  map 有自己的set、get、判读键存在has、删除指定的键delete、获取键值对entries、以及map的长度size
 *  map可以通过for...of， forEach进行迭代，原因是map 拥有迭代器（Iterator）
 *  object 是不能进行for...of、forEach进行迭代，原因是 object没有实现迭代器
 * */

{
  const map = new Map([[1, 11], [2, 22], [3, 33]]);
  console.log(map.get(1));
  console.log(map.has(1));
  map.delete(2);
  console.log(map);
  console.log(map.entries());

  for (const mapElement of map) {
    console.log(mapElement)
  }

  map.forEach(x => {
    console.log(x);
  })

  const objs = new Object({a: 'name', b: 'size'});
  console.log(objs, objs.a);

  // for (const obj of objs) {
  //   console.log(obj)
  // }
}


/**
 * cookie的expireTime 设置为0, 表示有效时间会跟随系统默认，其销毁时间与session销毁时间相同，
 * 即都在浏览器关闭后的特定时间删除，如果我们写程序不设置cookie有效时间，那么cookie会随着会话时间结束而消失
 * */

/**
 * postMessage使用场景
 * 安全的实现跨源通信
 * */


/**
 * async、await中如何处理catch（通常是在await 方法后处理 Promise catch）
 * */

/**
 * 数组的length 设置为0
 * 等同于将数组进行清空
 * 此时arr[1] = undefined
 * */

{
  const arr = [1, 2, 3, 4];
  arr.length = 0;
  console.log(arr)
}


/**
 * js动画和css动画
 * */

/**
 * e.target：触发事件的元素
 * e.currentTarget：绑定事件的元素
 * 特定场景下回出现事件冒泡的情况
 * */

/**
 * 数组常用的方法
 * 操作方法 push、pop、shift、unshift、slice、splice、indexOf、find、findIndex
 * 排序方法 sort、reverse
 * 转换方法 join
 * 迭代方法 map、forEach、some、filter、every
 * */


/**
 * @notice 也仅仅只针对在html中引入的文件
 *
 * 变量提升：未声明，先使用(es6之前会出现)
 * 函数提升：函数提升紧针对函数声明，对于函数表达式不会出现提升
 * */


/**
 * 继承：
 * 原型链继承: 子类的原型指向父类的实例,
 *  劣势：由于所有子类所继承的都是同一个父类的实例，当其中任意一个子类的实例 来自父类的 //引用类型变量// 被修改，都将会改变所有的子类实例
 *    在创建子实例时 无法向父类进行传参，即没有实现super
 *
 * 构造函数继承：子类的构造函数中执行父类的构造函数，并为其绑定this，让父类构造函数把成员属性和方法都挂到子类的this上，这样既避免了实例之间共享一个原型实例，
 *   又能向父类构造函数传参
 *   劣势：无法获取父类原型上的属性和方法
 *
 * 组合式继承：结合了原型继承和构造函数继承的特点
 *  劣势：每次进行实例时，都会执行两次父级构造函数，这并不优雅
 *
 * 寄生式组合继承（比较成熟继承）：解决构造函数执行两次的问题，我们将指向父类实例改为指向父类原型，减去一次构造函数的执行
 * */

/** 原型链继承 */
function Father() {
  this.name = {
    name: 'Father',
    age: 200
  };
}

Father.prototype.getName = function () {
  return this.name;
}

function Son() {

}

Son.prototype = new Father();
Son.prototype.constructor = Son;

const son = new Son();
console.log('属性获取', son.name);
console.log('方法获取', son.getName());
const son2 = new Son();
son2.name.name = 'Father2';
console.log('属性获取2', son2.name);
console.log('方法获取2', son2.getName());
console.log('属性获取', son.name);
console.log('方法获取', son.getName());

/** 构造函数继承 */
function P() {
  this.name = 'bob';
  this.fn = function () {
    console.log(this.name);
  }
}

P.prototype.getName = function () {
  console.log(this.name);
}

function S() {
  P.call(this, ...arguments);
}

const s = new S();
console.log(s.name)


function PP(name) {
  this.name = name;
}

PP.prototype.getName = function () {
  return this.name;
}

function SPP(name) {
  PP.call(this, ...arguments);
}

SPP.prototype = new PP();
SPP.prototype.constructor = SPP;

const spp = new SPP('张三');
console.log('组合式继承', spp.name);
console.log('组合式继承', spp.getName(), spp.__proto__);


/** 寄生式组合继承 */
function A(name) {
  this.name = name;
}

A.prototype.getName = function () {
  return this.name;
}

function AA() {
  A.call(this, ...arguments);
}

AA.prototype = Object.create(A.prototype);
AA.prototype.constructor = AA;

const aa = new AA('李四');
console.log(aa.name);
console.log(aa.getName());

/**
 * 防抖函数：防止抖动，指的是在一段时间内触发的n次，但是真正执行的只有一次(这一次是最后改变才进行触发的)
 * 节流函数：控制事件发生的频率，在一定时间内只进行一次事件的执行，当事件执行完成之后，才会进行下一次的触发
 * */

function debounce(fn, delay) {
  let timer;
  return (...args) => {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  }
}

function throttle(fn, delay) {
  let timer;
  return (...args) => {
    if (timer) return;

    setTimeout(() => {
      fn(...args);
      timer = null;
    }, delay);
  }
}

/**
 * == 比较规则
 * */

/**
 * 图片懒加载
 * */
function loadImg(path) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = reject;
    img.src = path;
  })
}

/**
 * source map 原理
 * 是从已转换的代码映射到原始的文件，是浏览器能够重构原始源并在调试器上显示重建的原始源
 * 性能影响：
 *  不会，因为只有在dev tools的时候才会进行source map下载
 *
 * 存在标准不？
 *  存在
 *  source map 关键字段
 *    version：版本
 *    file：编译后的文件
 *    names：一个优化用的字段，后续会在mappings中用到
 *    sources：多个源文件
 *    mappings：表示源代码和编译后代码之间的关系
 * */


/**
 * 二分查找：
 *  指在有序的数组里找出的指定的值，返回值的索引
 *
 *  操作步骤：
 *  1.从有序数组中间元素开始查找，如果正好和中间值相等，结束，否则：next
 *  2.从大于或者小于中间值的区间进行查找，然后重复步骤1
 *  3.重复以上过程，直至找到元素索引，否则查找失败
 *
 *  优点是：
 *    比较次数少，查找速度快，平均性能好
 *  缺点：
 *    有序表
 *    插入、删除困难
 *
 * */
function midSearch(arr, ele) {
  let start = 0,
    end = arr.length - 1;

  while (start <= end) {
    let mid = parseInt(`${(start + end) / 2}`);

    if (ele === arr[mid]) {
      return mid;
    } else if (ele < arr[mid]) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return -1
}
