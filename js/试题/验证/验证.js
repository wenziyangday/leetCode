/** 防抖函数 */
function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(function () {
      fn(...args);
    }, delay);
  }
}

/** 节流函数 */
function throttle(fn, delay) {
  let timer;
  return (...args) => {
    if (timer) return;
    timer = setTimeout(() => {
      fn(...args);
      timer = null;
    }, delay);
  }
}

/** 手动实现一个Promise */
const aa = new Promise((resolve, reject) => {
  try {
    throw new Error(1223);
    resolve(1);
  } catch (e) {
    reject(2);
  }
});

aa.then((val) => {
  console.log(val)
}, (error) => {
  console.log(error);
})

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';


function MyPromise(fn) {
  this.status = PENDING;
  this.reason = null;
  this.value = null;

  // 为什么要使用数组进行存储？
  // 如果fn中的异步操作还没有结束（此时的状态还是PENDING），
  this.onFulfilledStacks = [];
  this.onRejectedStacks = [];

  const _this = this;

  function resolve(val) {
    if (_this.status === PENDING) {
      _this.value = val;
      _this.status = FULFILLED;
      _this.onFulfilledStacks.forEach(cb => cb(val));
    }
  }

  function reject(reason) {
    if (_this.status === PENDING) {
      _this.status = REJECTED;
      _this.reason = reason;
      _this.onRejectedStacks.forEach(cb => cb(reason));
    }
  }

  try {
    fn(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

MyPromise.prototype.then = function (onFulfilled, onRejected) {
  let realOnFulfilled = onFulfilled;
  if (typeof realOnFulfilled === 'function') {
    realOnFulfilled = function (val) {
      return val;
    }
  }

  let realOnRejected = onRejected;
  if (typeof realOnRejected === 'function') {
    realOnRejected = function (val) {
      return val;
    }
  }

  if (this.status === FULFILLED) {
    realOnFulfilled(this.value);
  }

  if (this.status === REJECTED) {
    realOnRejected(this.value);
  }

  if (this.status === PENDING) {
    this.onFulfilledStacks.push(realOnFulfilled);
    this.onRejectedStacks.push(realOnRejected);
  }
}

const promise = new MyPromise(function (a, b) {
  console.log(a, b);
  console.log(2323);
});

console.log(promise);

/** 手动实现bind */
Function.prototype.myBind = function (obj, ...args) {
  return (...rest) => {
    return this.call(obj, ...args, ...rest);
  }
};

Function.prototype.myBind2 = function (obj) {
  const self = this;
  let boundArgs = arguments;
  return function () {
    let i, args = [];
    for (i = 1; i < boundArgs.length; i++) {
      args.push(boundArgs[i])
    }
    for (i = 0; i < arguments.length; i++) {
      args.push(arguments[i])
    }
    return self.apply(obj, args)
  }
};

function f(a, b, c) {
  console.log(a, b, c, Math.random());
}

f.myBind2({a: 10})(4)
f.myBind({a: 10}, 1, 2, 3)(4)

Function.prototype.myCall = function (ctx, ...arg) {
  ctx.fn = this;
  return ctx.fn(...arg);
}

Function.prototype.myApply = function (ctx, arg) {
  ctx.fn = this;
  return ctx.fn(...arg);
}

f.myCall({a: 1000}, 12, 'myCall');
f.myApply({a: 1000}, [100, 10000, 'myApply']);

/** 类数组转化 */
// [ undefined, undefined, undefined ]  [ 1, 1, 1 ]
console.log('Array.from', Array.from({length: 3}), Array.from({length: 3}).map(_x => 1));

// [ <3 empty items> ] [ <3 empty items> ]
console.log('Array', Array(3), Array(3).map(_x => 1))

/** 实现一个compose函数 */
function compose(...args) {
  return args.reduce((a, b) => {
    return (...arg) => {
      return a(b(...arg));
    }
  });
}

const add10 = (x) => x + 10;
const mul10 = (x) => x * 10;
const add100 = (x) => x + 100;

console.log(compose(add10, mul10, add100)(10));

/** JSON.stringify 注意事项 */
const objs = {
  a: '1',
  b: null,
  c: undefined,
  d: function () {
    return '12'
  },
  e: Array('3'),
  f: new Object({'as': 'sds'}),
  g: new Map([['a', 'as']]),
  h: new Set([1, 2, 3, 4]),
  get aa() {
    return;
  },
  get bb() {
    return '';
  }
}
console.log('JSON.stringify 注意事项', JSON.parse(JSON.stringify(objs)), JSON.stringify(objs));

/**
 * @description 实现一个深拷贝
 * @tips:
 *  1）基本数据类型及函数处理
 *  2）数组
 *  3）内置对象Date、Regex
 *  4）内置对象Set、Map
 *  5）引用类型
 * */
function deepClone(source, memory) {
  const isPrimitive = (value) => {
    return /Number|Boolean|String|Null|Undefined|Symbol|Function/.test(
      Object.prototype.toString.call(value)
    );
  };
  let result = null;

  memory || (memory = new WeakMap());
  // 原始数据类型及函数
  if (isPrimitive(source)) {
    console.log("current copy is primitive", source);
    result = source;
  }
  // 数组
  else if (Array.isArray(source)) {
    result = source.map((value) => deepClone(value, memory));
  }
  // 内置对象Date、Regex
  else if (Object.prototype.toString.call(source) === "[object Date]") {
    result = new Date(source);
  } else if (Object.prototype.toString.call(source) === "[object Regex]") {
    result = new RegExp(source);
  }
  // 内置对象Set、Map
  else if (Object.prototype.toString.call(source) === "[object Set]") {
    result = new Set();
    for (const value of source) {
      result.add(deepClone(value, memory));
    }
  } else if (Object.prototype.toString.call(source) === "[object Map]") {
    result = new Map();
    for (const [key, value] of source.entries()) {
      result.set(key, deepClone(value, memory));
    }
  }
  // 引用类型
  else {
    if (memory.has(source)) {
      result = memory.get(source);
    } else {
      result = Object.create(null);
      memory.set(source, result);
      Object.keys(source).forEach((key) => {
        const value = source[key];
        result[key] = deepClone(value, memory);
      });
    }
  }
  return result;
}

/** flatMap */
Array.prototype.myFlatMap = function (callback) {
  return this.map(callback).flat();
}

console.log([1, 2, 3, 4, 5].myFlatMap(x => [[x * 2]]));


/** 手动实现一个async */
function fn(args) {
  return spawn(function* () {

  });
}

function spawn(genF) {
  return new Promise(function (resolve, reject) {
    const gen = genF();

    function stepF(nextF) {
      let next;
      try {
        next = nextF();
      } catch (e) {
        reject(e);
      }

      if (next.done) {
        return resolve(next.value);
      }

      Promise.resolve(next.value).then(function (v) {
        stepF(function () {
          return gen.next(v);
        })
      }, function (e) {
        stepF(function () {
          gen.throw(e)
        })
      })
    }

    stepF(function () {
      return gen.next(undefined);
    })
  });
}

/** 替换串 */
console.log('foolish, foll, fools'.split('foo').join('bar'));

/** 纯对象 */
function Person() {
}

const person = new Person();

function isPlainObj(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return false;
  }
  let proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}

console.log(isPlainObj({}));
console.log(isPlainObj(person));

/** 无限累加 */
function sum(...args) {
  const f = (...rest) => sum(...args, ...rest);
  f.valueOf = () => args.reduce((x, y) => x + y, 0);
  return f;
}

console.log(sum(1, 2, 3, 4, 5)(10)(20)(30).valueOf());

/** 同步 sleep函数 */
function sleep(delay, fn) {
  const startTime = +(new Date());
  let curTime = startTime;
  while (true) {
    curTime = +(new Date());

    if (curTime - startTime >= delay) break;
  }
  console.log('end');

  return fn;
}
const sleepCb = function () {
  console.log('sleepCb');
}


sleep(100, sleepCb)();
console.log('执行');

/** parse url */
const str = decodeURI('?communityCode=310107015005&sourceBrandName=%E5%8D%8E%E8%87%B4%E9%85%92%E8%A1%8C&targetBrandName=%E5%8D%8E%E8%87%B4%E9%85%92%E8%A1%8C')
console.log(Object.fromEntries(new URLSearchParams(str)));
console.log(new URL('https://ddtonereport.newayz.com/AI-report?communityCode=310107015005&sourceBrandName=%E5%8D%8E%E8%87%B4%E9%85%92%E8%A1%8C&targetBrandName=%E5%8D%8E%E8%87%B4%E9%85%92%E8%A1%8C'));

/** map */
const _map = new Map([[1, 1], [1, 2]]);
console.log(_map);

/** 监听数据变化 */
const arrList = [1, 2, 3, 4];

new Proxy(arrList, {
  get(target, p, receiver) {
    return p;
  },
  set(target, p, value, receiver) {
    console.log(value);
  }
})

/** 对象解构 */
const objsc = {a: 10, b: 100};
const {a: aaObj, b} = objsc;
// console.log(aaObj, b, a);

/** 千位符 */

/** 随机字符串 */
console.log( Math.random().toString(36));
