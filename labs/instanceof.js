// 构造函数的实例对象的属性是否出现在其原型链上
console.log({} instanceof Object);


/**
 * @param left
 * 被实例化的对象
 * @param right
 * 实例化对象的原型链
 * @return {boolean}
 * */
function myInstanceof(left, right) {
  let protoLeft = Object.getPrototypeOf(left);
  const protoRight = right.prototype;

  while (true) {
    if (!protoLeft) return false;
    if (protoLeft === protoRight) return true;
    protoLeft = Object.getPrototypeOf(protoLeft);
  }
}


console.log(myInstanceof({}, Object ));
