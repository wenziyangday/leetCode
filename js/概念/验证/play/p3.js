function myNew(Fn, ...args) {
  const obj = new Object();
  obj.__proto__ = Fn.prototype;
  const res = Fn.call(obj, ...args);
  return res instanceof Object ? res : obj;
}
