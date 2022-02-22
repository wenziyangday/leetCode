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
    resolve(1);
  } catch (e) {
    reject(2);
  }
});

function MyPromise(fn) {
  this.status = 'pending';
  this.reason = null;
  this.value = null;
  const _this = this;

  function resolve(val) {
    _this.value = val;
    _this.status = 'fulfilled';
  }

  function reject(reason) {
    if (_this.status === 'pending') {
      _this.status = 'rejected';
      _this.reason = reason;
    }
  }

  try {
    fn(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

const promise = new MyPromise(function (a, b) {
  console.log(a, b);
  console.log(2323);
});

console.log(promise);
