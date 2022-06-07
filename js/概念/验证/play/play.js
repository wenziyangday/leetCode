/** 基本用法，监听对象属性的获取与修改 */
const egObj = {
  a: 1,
  b: 2,
  c: 3
};
const obj = new Proxy(egObj, {
  get: function (target, p, receiver) {
    console.log('get', target, p, receiver);
    return Reflect.get(target, p, receiver);
  },
  set: function (target, p, value, receiver) {
    console.log('set', target, p, value, receiver);
    return Reflect.set(target, p, value, receiver);
  }
});

console.log('----------proxy----------', obj.a);
++obj.a;
console.log('----------proxy2---------', obj.a);

