/** 防抖&&节流 */
function debounce(fn, delay) {
  let timer;
  return (...args) => {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      fn(...args);
    }, delay);
  }
}

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

/** bind,call, apply */
Function.prototype.myBind = function (ctx, ...args) {
  return (...rest) => {
    return this.call(ctx, ...args, ...rest);
  }
}

Function.prototype.myCall = function (ctx, ...args) {
  ctx.fn = this;
  return ctx.fn(...args);
}

Function.prototype.myApply = function (ctx, args) {
  ctx.fn = this;
  return ctx.fn(...args);
}

/** flatMap */
function myFlatMap(arr, cb) {
  return arr.map(cb).flat();
}

Array.prototype.myFlatMap2 = function (cb) {
  return this.map(cb).flat();
}

/** once */
function myOnce(fn) {
  let result;
  let revoked = false;

  return (...args) => {
    if (revoked) return result;

    result = fn(...args);
    revoked = true;
    return result;
  }
}

/** 获取页面中使用最多的标签 html中执行 */
// [...document.querySelectAll("*")]
// Object.entries()

/** 字符串压缩 */
// eg. aaabbbccc 转成 a3b3c3
function encode(str) {
  const arr = str.split('');
  const count = arr.reduce((a, b) => {
    a[b] = a[b] ? a[b] + 1 : 1;
    return a;
  }, {});
  return Object.entries(count).reduce((a, b) => {
    let str = '';
    if (b[1] === 1) {
      str = b[0]
    } else {
      str = b[0] + b[1];
    }
    return a + str;
  }, '');
}

console.log(encode('aaabbbcdefggggg'));

/** query string */
function parseObj(url) {
  const _url = new URL(url);
  if (_url.search) {
    return Object.fromEntries(new URLSearchParams(_url.search));
  }
  return {};
}

// console.log(parseObj('https://ddtonereport.newayz.com/AI-report?communityCode=410103001007&sourceBrandName=%E4%B8%AD%E7%B2%AE%E5%90%8D%E5%BA%84%E8%8D%9F&targetBrandName=%E5%90%8D%E5%93%81%E4%B8%96%E5%AE%B6&appVipType=10'))

/** sample函数 */
Array.prototype.sample = function () {
  if (Array.isArray(this)) {
    throw new Error('不是数组')
  }
  return this[Math.floor(Math.random() * this.length)];
}

/** sleep */
function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, time);
  });
}

function syncSleep(time, fn) {
  let startTime = +(new Date());
  return () => {
    while (true) {
      const curTime = +(new Date());
      if (curTime - startTime >= time) {
        return fn;
      }
    }
  }
}


/** flatten */
function flats(arr) {
  return arr.reduce((a, b) => a.concat(
    Array.isArray(b) ? flats(b) : b
  ), [])
}

console.log(flats([1, 2, [3, [4]]]));

/**
 * @description 每次都让最后一个和当前的随机位置进行交换
 * */
function shuffle(array) {
  let len = array.length;
  let arr = array.slice();
  while (len) {
    let randomIndex = Math.floor(Math.random() * len--);
    [arr[randomIndex], arr[len]] = [arr[len], arr[randomIndex]]
  }

  return arr;
}

console.log(shuffle([1, 2, 3, 4, 5]));

/** 逆序字符串 */
function reverseStr(str) {
  return str.split('').reverse().join('');
}

console.log(reverseStr('hello'));

/** 继承实现 inherits */
function inherits(Child, Parent) {
  const F = function () {
  }
  F.prototype = Parent.prototype;
  Child.prototype = new F();
  Child.prototype.constructor = Child;
}

function Child(name) {
  this.name = name;
  Parent.call(this, 100);
}

function Parent(age) {
  this.age = age;
}

Parent.prototype.getName = function () {
  console.log(this.age);
}
inherits(Child, Parent);

const child = new Child('像素');
child.getName();

/** 数字的千位符 */
function tSign(str) {
  return Number(str).toLocaleString();
}

console.log(tSign(1000000.123122301));

function tSign2(str) {
  let [integer, decimal] = str.split('.');
  let result = '';

  while (integer.length > 3) {
    let sub = integer.substring(integer.length - 3);
    integer = integer.replace(sub, '');
    result = `,${sub}${result}`;
  }

  if (integer.length) {
    result = `${integer}${result}`;
  }

  return result + (decimal ? `.${decimal}` : "");
}

console.log(tSign2('10343443432332000.100001323'));

/** 深比较函数 */
function isEqual(x, y) {
  if (x === y) {
    return true;
  } else if (x !== null && y !== null && typeof x === 'object' && typeof y === 'object') {
    const keysX = Object.keys(x);
    const keysY = Object.keys(y);

    if (keysX.length !== keysY.length) {
      return false;
    }

    for (const xKey of keysX) {
      if (!isEqual(x[xKey], y[xKey])) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}

console.log(isEqual({a: NaN}, {b: NaN}));

/** 监听一个对象中的属性变化 */
const objProxy = {};
new Proxy(objProxy, {
  get(target, p, receiver) {
    console.log(target, p, receiver);
    return target[p];
  },
  set(target, p, value, receiver) {
    console.log(target, p, value, receiver)
    return value;
  }
});

objProxy.name = 'objProxy';
console.log(objProxy.name);

/** 字符串的编码和解码 */
// eg: aaabbbccc = a3b3c3 aaabbc = a3b2c
function encode(str) {
  const objCount = str.split('').reduce((a, b) => {
    if (a[b]) {
      a[b] += 1;
    } else {
      a[b] = 1;
    }

    return a;
  }, {});

  const entriesCount = Object.entries(objCount);
  return entriesCount.reduce((acc, b) => {
    const [key, val] = b;
    if (val > 1) {
      acc += `${key}${val}`
    } else {
      acc += `${key}`
    }
    return acc;
  }, '')
}

console.log(encode('aaabbbc'));

/** 随机字符串 */
console.log(Math.random().toString(36));

/** 判断一个值是不是整数 */
console.log(Number.isInteger('10000.001'));

Number.myIsInteger = function (num) {
  return typeof num === 'number' && num % 1 === 0;
}
console.log(Number.myIsInteger(100));

/** compose */
function compose(...args) {
  return args?.reduce((acc, item) => {
    return (...rest) => {
      return acc(item(...rest));
    }
  });
}

const add10 = (x) => x + 10;
const mul10 = (x) => x * 10;
const add100 = (x) => x + 100;
console.log(compose(add10, mul10, add100)(10));

/** 获取字符串中出现最多的字符串，及次数 */
function countStr(str) {
  const countObj = str.split('').reduce((acc, b) => {
    if (acc[b]) {
      acc[b] += 1;
    } else {
      acc[b] = 1;
    }
    return acc;
  }, {});

  const entries = Object.entries(countObj);
  return entries.reduce((acc, b) => {
    const [key, val] = b;
    const [_key] = Object.keys(acc);

    if (_key) {
      if (val > acc[_key]) {
        acc = {};
        acc[key] = val;
      }
    } else {
      acc[key] = val;
    }

    return acc;
  }, {});
}

console.log(countStr('aaabbaaacc'));

/**
 * @description 斐波那契数列
 * @example 1, 1, 2, 3, 5, 8, 13, 21, 34, ....., f(n) = f(n - 1) + fn(n - 2)
 * */
function fib(n) {
  if (n <= 2) {
    return 1
  }
  return fib(n - 1) + fib(n - 2);
}

// const countFib = Array.from(new Array(40)).map((_x, index) => fib(index + 1));
// console.log(countFib);

/** n > 的所有斐波那契数列 */
function fib2(n) {
  let a = 0, b = 1;
  let result = [0];

  while (b < n) {
    result.push(b);
    // 赋值
    [a, b] = [b, a + b];
  }

  return result;
}

console.log(fib2(100000000000000000000000000));

/** chunk 函数 分割数组*/
function chunk(arr, limit) {
  const _arr = arr.slice();
  let result = [];
  if (limit > _arr.length || limit <= 0) throw new Error('不合理的数组长度');

  while (_arr.length) {
    result.push(_arr.splice(0, limit));
  }

  return result;
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 4));

/** 随机生成手机验证码 */
// 存在重复的
const random = (n) => Math.floor(Math.random() * (n + 1));

function codeRandom() {
  return (new Array(6)).fill(1).map(_ => random(9));
}

console.log(codeRandom());

// shuffle
function shuffle2(arr) {
  const _arr = arr.slice();
  let len = _arr.length;

  while (len) {
    const randomIndex = Math.floor(Math.random() * len--);
    [_arr[randomIndex], _arr[len]] = [_arr[len], _arr[randomIndex]];
  }

  return _arr;
}

console.log(shuffle2([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]).slice(0, 6));

/** 去除收尾空格 */
// trim()
const trim = (str) => str.trim() || str.replace(/^\s+|\s+$/g, '');
console.log(trim(' hello world '));
console.log(' hello world '.replace(/ /g, ''));

/** 获取数组交集 */
const intersection = (a, b) => [...(new Set(a.filter(_x => b.includes(_x))))];
console.log(intersection([0, 1, 2, 3, 4, 5, 6, 7, 8, 9], [9, 8, 7, 6, 7]));

/** compose函数 */
const compose2 = (...args) => {
  return args.reduce((acc, b) => {
    return (...rest) => {
      return acc(b(...rest));
    };
  })
}
console.log(compose2(add10, mul10, add100)(10));

// function compose3(fn) {
//   let args = [].slice.call(arguments);
//
//   return function () {
//     let sum = 0;
//     let params = [].slice.call(arguments)[0];
//     for (let i = 0; i < args.length; i++) {
//       let f = args[i];
//       sum += f(params);
//     }
//
//     return sum;
//   }
// }
// console.log(compose3(add10, mul10, add100)(10));

/** 求给定数组中的n个数相加的和为sum 的所有可能的集合 */
function setIndexes(arr, n, sum) {

}

/** 随机几个n个元素 */
const shuffle3 = (arr, n) => {
  const _arr = arr.slice();
  let len = _arr.length;
  if (n > len) return -1;

  while (len) {
    const randomIndex = Math.floor(Math.random() * len--);
    [_arr[randomIndex], _arr[len]] = [_arr[len], _arr[randomIndex]];
  }

  return _arr.slice(0, n);
}

console.log(shuffle3([1, 2, 3, 4, 5, 6, 7, 8], 2));

/** instanceof */
function myInstanceof(obj, pro) {
  if (typeof obj !== 'object' && typeof obj !== 'function') {
    return false;
  }
  let proto = obj?.__proto__ || null;

  while (true) {
    if (proto === null) {
      return false;
    }

    if (proto === pro.prototype) {
      return true;
    }

    proto = proto.__proto__;
  }
}

/** 如何实现一个链式查找  find */
function find(data) {
  return {
    data,
    where(condition) {
      this.data = this.data.filter(_x => {
        return Object.entries(condition).every(([key, val]) => {
          if (val instanceof RegExp) {
            return val.test(_x[key]);
          }

          return _x[key] === val;
        })
      });

      return this;
    },
    orderBy(key, type) {
      this.data.sort((a, b) => {
        return type !== 'desc' ? b[key] - a[key] : a[key] - b[key];
      });

      return this;
    }
  }
}

console.log(find([
  {userId: 8, title: 'title1'},
  {userId: 11, title: 'other'},
  {userId: 15, title: null},
  {userId: 19, title: 'title2'}
]).orderBy('userId', 'asc'));

/** promisify */
function promisify(fn) {
  return function (...args) {
    const hasCb = [...args].some(_x => typeof _x === "function");

    if (hasCb) {
      fn(...args);
    } else {
      return new Promise((resolve, reject) => {
        fn(...args, cb);

        function cb(err, data) {
          if (err) {
            reject(err);
          } else {
            resolve(data);
          }
        }
      });
    }
  }
}
