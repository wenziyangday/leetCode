function throttle(fn, delay) {
  let flag = true;

  return function (...args) {
    const ctx = this;
    if (!flag) {
      return;
    }
    flag = false;
    setTimeout(() => {
      fn.apply(ctx, args);
      flag = true;
    }, delay);
  }
}

function throttle2(fn, delay) {
  let last = 0;
  return function (...args) {
    const ctx = this;
    let now = +new Date();
    if (now - last < delay) return;
    last = now;
    fn.apply(ctx, args);
  }
}


function debounce(fn, delay) {
  let timer = null;
  return function (...args) {
    const ctx = this;
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      fn.apply(ctx, args);
    }, delay)
  }
}

// 当防抖触发的太过频繁，会导致有一段时间内得不到数据响应，因此我们希望在一段时间内可以给用户一个响应
function debounce2(fn, delay) {
  let last = 0, timer = null;
  return function (...args) {
    const ctx = this;
    let now = +new Date();
    if (now - last < delay) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        last = now;
        fn.apply(ctx, args);
      }, delay);
    } else {
      last = now;
      fn.apply(ctx, args);
    }
  }
}
