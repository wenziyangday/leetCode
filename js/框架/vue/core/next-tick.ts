/**
 * 在下一次dom更新循环后执行回调函数，获取更新后的dom
 * */

let timeFun;


const cbs = [];

cbs.forEach(cb => {
  try {
    cb.call(this)
  } catch (e) {

  }
})
