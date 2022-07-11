/** bind */
Function.prototype.myBind = function (o, ...args) {
  const self = this;
  return (...rest) => {
    return self.call(o, ...args, ...rest);
  }
}

function log() {
  console.log(this.a);
}

const aa = {
  a: '我是一个a',
}

log.myBind(aa)();

Function.prototype.myBind2 = function (o) {
  const boundArg = arguments;
  const self = this;
  return function () {
    let result = [];
    for (let i = 1; i < boundArg.length; i++) {
      result.push(boundArg[i]);
    }

    for (let i = 0; i < arguments.length; i++) {
      result.push(arguments[i]);
    }

    return self.apply(o, result);
  }
}

log.myBind2(aa)();

/** json.stringify 注意事项 */
const jsonA = {
  a: 1,
  b: null,
  c: undefined,
  e: function () {

  },
  get f() {
    return;
  },
  get g() {
    return "";
  },
  h: Array('we'),
  i: Object('12'),
  j: new Set([12, 3, 4, 5, 6, 7]),
  k: new Map([[1, 2]])
}
// '{"a": "1", "b": null, "g": "", "h": ["we"], "i": "12", "j": {}, "k": {}}'
console.log(JSON.stringify(jsonA));

/** compose函数 */
function compose(...args) {

  // 将一个类数组转换为数组
  console.log(Array.from(arguments));
  console.log(Array.apply(null, arguments));
  console.log(Array.prototype.concat.apply([], arguments));
  return args?.reduce((acc, item) => {
    return (...args) => {
      return acc(item(...args));
    }
  })
}

const add10 = (x) => x + 10;
const mul10 = (x) => x * 10;
const add100 = (x) => x + 100;

console.log(compose(add10, mul10, add100)(10));

function spawn(genF) {
  return new Promise(function (resolve, reject) {
    const gen = genF();

    function stepNext(nextF) {
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
        stepNext(function () {
          return gen.next(v);
        });
      }, function (error) {
        stepNext(function () {
          return gen.throw(error);
        });
      })
    }

    stepNext(function () {
      return gen.next(undefined);
    })
  })
}

function spawn2(genF) {
  return new Promise(function (resolve, reject) {
    const gen = genF();

    function stepF(nextF) {
      let next;

      try {
        next = nextF();
      } catch (err) {
        reject(err);
      }

      if (next.done) {
        return resolve(next.value);
      }

      Promise.resolve(next.value).then(function (va) {
        stepF(function () {
          return gen.next(va);
        })
      }, function (err) {
        stepF(function () {
          return gen.throw(err);
        })
      })
    }

    stepF(function () {
      return gen.next(undefined);
    })
  });
}

function once(fn) {
  let result;
  let flag = false;
  return (...args) => {
    if (flag) return result;
    result = fn(...args);
    flag = true;
    return result;
  }
}

function _new(fn, ...args) {
  const obj = Object.create(fn.prototype);
  const result = fn.call(obj, ...args);
  return typeof obj === 'object' ? result : obj;
}

function isPlainObj(obj) {
  if (typeof obj !== 'object' || obj === null) return false;

  let proto = obj;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto)
  }

  return Object.getPrototypeOf(proto) === proto;
}

