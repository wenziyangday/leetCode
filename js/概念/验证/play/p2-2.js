{
  /**
   * undefined:
   *  变量声明了，但是未赋值
   * ReferenceError: xxx is not defined
   *  变量未进行声明就使用（编译报错）
   * */
}

{
  /**
   * slice 数组（类数组）截取
   * */
}

{
  /**
   * js 中引用数据类型的存储：
   *  存储在一片不连续的内存中，而是通过哈希映射的方式进行存储
   * */
}

{
  /**
   * script 中使用export报错的原因
   *  export 进行的是模块导出，而script默认引入的是脚本文件，如果要引入module 需要script添加type属性
   * */
}

{
  /**
   * js 倒计时 会引发偏差
   *  偏差产生的原因：
   *    js倒计时通常是通过setTimeout或者setInterval进行实现的，这就会引发时间偏差
   *    原因是js程序执行机制造成的，setTimeout或者setInterval的作用是每隔一段时间将回调函数加入到执行队列中，因此事件并不是立即执行的，
   *    他会等到执行栈为空的时候才会进行执行
   *
   *  解决方法：
   *    1.通过前端定时向服务器获取最新的时间差，以此来校准倒计时时间
   *    2.前端根据时间差来自动调整间隔时间的方式来实现的，
   * */
}

{
  /**
   * setTimeout 实现setInterval TODO
   * */
}

{
  /**
   * js 实现拖拽
   * mouseup、mousedown、mousemove
   * */
}

{
  /**
   * mouseenter、mouseover 当鼠标移入到元素上的时候会触发
   * 区别是mouseenter 不支持冒泡，导致一个元素在其子元素上移入移出时会触发mouseover和mouseout
   * 但是不会触发mouseleave 和 mouseenter
   * */
}

{
  /**
   * 异步编程形式：
   *  1.回调函数
   *  2.promise
   *  3.generator方式
   *  4.async和await
   * */
}

{
  /**
   *  toPrecision 处理精度，toFixed小数点后几位的
   * */
}

{
  /**
   * polyfill 指的是用于实现浏览器并不支持的原生API的代码
   * */
}

{
  /**
   * 检测浏览器的版本
   *  1.window.navigator.userAgent: 这种不靠谱 该属性易被改写
   *  2.功能检测 根据每个浏览器独有的特性来进行判断，如 ie 下独有的 ActiveXObject
   * */
}

{
  /**
   *  前端路由：
   *    把不同路由对应的页面或者内容的任务交给前端来做，之前是通过服务端根据不同url来返回不同页面或者内容的
   *
   *  什么时候使用？
   *    在单页面结构中，大部分页面结构是不动的，只改变部分内容的时候使用
   *
   *  优点：
   *    用户体验好，不需要每次都通过服务器获取，能快速展现给用户
   *
   *  劣势：
   *    单页面无法记住之前滚动的位置，无法在前进，后退的时候记住滚动的位置
   *
   *  实现方式：
   *    一种是通过hash 一种是通过pushState
   *
   * */

}

{
  /**
   * 移动端点击事件延迟 300ms
   * */
}

{
  /**
   *
   * */

  console.log(['10', '10', '10', '10'].map(parseInt))
}
