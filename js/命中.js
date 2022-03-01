function debounce(fn, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      f(...args);
    }, delay)
  }
}

function throttle(fn, delay) {
  let timer;
  return function (...args) {
    if (timer) return;
    timer = setTimeout(() => {
      fn(...args);
      timer = null;
    }, delay);
  }
}

const aa = new Promise((resolve, reject) => {
  try {
    throw new Error('nii');
    resolve(1);
  } catch (e) {
    reject(e)
  }
});

const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';

function MyPromise(fn) {
  this.status = PENDING;
  this.value = null;
  this.reason = null;

  const that = this;

  function resolve(value) {
    if (that.status === PENDING) {
      that.status = FULFILLED;
      that.value = value;
    }
  }

  function reject(reason) {
    if (that.status === PENDING) {
      that.status = REJECTED;
      that.reason = reason;
    }
  }

  try {
    fn(resolve, reject);
  } catch (e) {
    reject(e);
  }
}

const aaMy = new MyPromise((resolve, reject) => {
  try {
    throw new Error('nii');
    resolve(1);
  } catch (e) {
    reject(e)
  }
});

console.log(aa, aaMy)
