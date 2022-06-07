Function.prototype.myBind = function (o, ...args) {
  const self = this;
  return (...rest) => {
    return self.call(o, ...args, ...rest);
  }
}

Function.prototype.myApply = function (o, args) {
  o.fn = this;
  return o.fn(...args);
}


Function.prototype.myCall = function (o, ...args) {
  o.fn = this;
  return o.fn(...args);
}


function MyNew(Fn, ...args) {
  const obj = new Object();
  obj.__proto__ = Fn.prototype;
  const res = Fn.call(obj, ...args);
  return res instanceof Object ? res : obj;
}
