/**
 * bind 创建一个新的函数，在被调用时，
 *      这个新函数的this被指定为bind()的第一个参数
 *      而其余参数将会成为该函数的参数，供函数调用使用
 * */
const _module = {
  x: 100,
  console: function () {
    console.log(this.x);
    console.log('arguments', arguments);
  }
}

const _module2 = {
  x: 100999
}

const a = _module.console.bind(_module2, [1, 2], 11111, 'bind参数');
a();

/**
 * apply  调用一个给定this值的函数
 *        以及以一个数组的形式提供的参数
 * */

_module.console.apply(_module2, [1, 2, 3, 'apply参数']);
// aa();

/**
 * call 调用一个给定this值的函数
 *      以及任意多个参数
 * */

_module.console.call(_module2, 1, 2, 'call参数');


/**
 * 三者之间的比较：
 *    都是为了改变函数中this的指向
 *    区别：
 *      bind 是返回一个新的函数，需要重新执行，接收一个数组类型的参数或者一个类数组的参数
 *      apply、call 则是立即执行改变this指向的函数
 *      apply 接收一个数组类型的参数作为函数的执行参数，而call这接收任意多个函数参数
 * */

/**
 * 手动实现bind、apply、call
 * */

Function.prototype.myBind = function (ctx, ...args) {
  return (...newArgs) => {
    this.apply(ctx, [...newArgs, ...args]);
  }
};

Function.prototype.myCall = function (ctx, ...args) {
  ctx.fn = this;
  return ctx.fn(...args);
}

Function.prototype.myApply = function (ctx, args) {
  ctx.fn = this;
  return ctx.fn(...args);
}

let bb = _module.console.myBind(_module2, [1, 2, 3, 4]);
bb();

