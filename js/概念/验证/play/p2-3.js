{
  /**
   *  同源策略
   *    同源策略是指用户在其站点上的服务必须是在相同协议、端口、域名的前提下的
   *
   *    DOM同源策略：
   *      禁止对不同源页面dom进行操作，典型场景：iframe跨域情况
   *
   *    XMLHttpRequest:
   *      禁止使用 XHR 对象向不同源的服务器地址发起 HTTP 请求
   *
   * */
}

{
  /**
   * 垃圾回收机制：
   *  标记清除：
   *    从跟对象开始查找，对于那些不存在于根节点上的 进行清除，
   *    缺点：
   *      对于在根对象上无法查找到的会进行回收，
   *      回收后 内存中会形成碎片，影响后续大面积的内存申请
   *
   *  引用计数：
   *    对每个值记录引用次数，然后通过引用次数进行回收
   *    缺点：
   *      对于循环引用的值
   *
   * */
}

{
  /**
   * JSON和XML
   *  json 一种轻量型的数据结构
   *
   *  XML 可扩展标记语言
   * */
}

{
  /**
   *  document.write
   *    直接向页面写入内容流
   *  innerHtml
   *    将内容写入某个DOM节点，不会导致页面全部重绘
   *    其原因在于其允许更精确的控制要刷新页面的那一个部分
   * */
}

{
  /**
   *  function length
   *    就是第一个具有默认值之前的参数个数。
   * */

  /** length = 1 */
  function a(name) {

  }

  /** length = 1 */
  function aa(name, age = 1) {

  }

  /** length = 0 */
  function aa(name = '12', age) {

  }

  const count = 100;
  console.log(count.toString().length, 123['toString'].length)
}


{
  /**
   *  for ... in 遍历对象的  整个原型链
   *  for ... of 不会遍历整个原型链
   *
   **/
  const obj = {};
  for (const objKey in obj) {
    console.log(objKey)
  }
}

{
  /**
   * 类数组对象（array-like）
   *  具有length属性
   *
   * */
}

{
  /**
   *  脚本延迟加载：
   *    defer
   *      给 js 脚本添加 defer 属性，这个属性会让脚本的加载与文档的解析同步解析，
   *      然后在文档解析完成后再执行这个脚本文件，这样的话就能使页面的渲染不被阻塞。
   *      多个设置了 defer 属性的脚本按规范来说最后是顺序执行的，但是在一些浏览器中可能不是这样。
   *
   *    async
   *      给 js 脚本添加 async 属性，这个属性会使脚本异步加载，不会阻塞页面的解析过程，
   *      但是当脚本加载完成后立即执行 js 脚本，这个时候如果文档没有解析完成的话同样会阻塞。
   *      多个 async 属性的脚本的执行顺序是不可预测的，一般不会按照代码的顺序依次执行。
   *
   *    动态创建 DOM 方式：
   *      动态创建 DOM 标签的方式，可以对文档的加载事件进行监听，当文档加载完成后再动态的创建 script 标签来引入 js 脚本。
   *
   *    使用 setTimeout 延迟方法：
   *      设置一个定时器来延迟加载js脚本文件
   *
   *    让 JS 最后加载：
   *      将js放在页面最后位置
   *
   * */
}

{
  /**
   * 是不能new 一个箭头函数，原因是箭头函数没有prototype
   * 而new 是将 对象的__proto__ 指向构造函数的 prototype 上的
   * */
}

{
  /**
   * Object.assign 或触发setter属性 （这是由于其是对一个target对象进行修改）
   * ... 扩展运算符 不复制继承的属性或者类的属性，但是其会复制ES6的symbol属性
   * */
}

{
  /**
   * 数据类型检测：
   *  instanceof
   *  typeof
   *  constructor
   *  Object.prototype.toString.call
   * */
}

{
  /**
   * Object.is
   * ==
   * ===
   * */
}

{
  /**
   * isNaN 直接进行数据判断 无需类型隐式转换
   * Number.isNaN 则需要进行类型转化
   * */
}

{
  /**
   * 使用promise 每隔一秒钟打印一下1，2，3
   * reduce(() => {}, initValue);
   * */

  [1, 2, 3].reduce((p, c) => {
    return p.then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(console.log(c));
        }, 1000)
      })
    })
  }, Promise.resolve());
}

{
  /**
   * Promise中值穿透
   *  .then 或者 .catch 的参数期望是函数，传入非函数则会发生值穿透。
   *  当then中传入的不是函数，则这个then返回的promise的data，将会保存上一个的promise.data。这就是发生值穿透的原因。
   *  而且每一个无效的then所返回的promise的状态都为resolved。
   * */

  Promise.resolve(1).then(3).then(Promise.resolve(10)).then(res => console.log(res))
}

{
  /**
   * window.requestAnimationFrame(callback)
   * 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。
   * 优势：
   *  cpu节能
   *  函数节流
   * */
}

{
  /**
   * 浏览器的一帧都干了什么？
   *  大多数浏览器都是60HZ （60帧/s）（16.6ms/帧）
   *  1.接受输入事件
   *  2.执行事件回调
   *  3.开始一帧
   *  4.执行RAF（requestAnimationFrame）
   *  5.页面布局，样式计算
   *  6.绘制渲染
   *  7.执行RIC（RequestIdelCallback）(RIC 只有在一帧的前面6件全做完了 才会执行，
   *    如果一帧前面6步执行完毕后还有事件才会进行RIC执行，下一帧需要在RIC执行完毕后才会开始，所以RIC执行事件不得超过30ms，否则会影响下一帧的渲染，
   *    从而导致页面卡顿和事件的响应不及时)
   * */
}

{
  /**
   * Object.defineProperty(obj, prop, desc)
   *  不能监听数组的变化
   *  必须遍历对象的每个属性
   *  必须深层遍历嵌套对象
   *
   * Proxy
   *  proxy针对的是整个对象
   *  解决Object.defineProperty不能遍历数组的问题
   *  有更多的拦截方法
   * */
}

{
  /**
   * 虚拟dom ?
   *  通过js对象模拟出来DOM节点
   *
   * dom diff
   *  通过特定的算法计算出一次操作所带来的dom变化
   *
   * react中涉及到虚拟dom的代码分为：
   *  1.把render中的jsx（或者通过creatElement这个api）转化为虚拟dom
   *  2.状态或者属性改变之后重新计算虚拟dom，并生成一个补丁对象（dom diff）
   *  3.通过这个补丁对象更新视图中的dom节点
   *
   * 使用虚拟dom并不一定更快
   *  简单的数据更新，通过虚拟dom会增加计算量和代码量
   * why in use？
   *  使用虚拟dom可以提高代码的性能下限，并极大的优化大量操作dom时产生的性能损耗，同时这些框架也保证了，即使在少数虚拟dom不太给力的场景下，性能也在我们的接受的范围内。
   * */
}

{
  /**
   * css文件下载过程中会堵塞渲染？
   *  不会影响DOM解析，但是会影响dom的渲染。CSSOM tree 要和dom tree合成Render Tree才会绘制页面
   * css没有下载或者解析完成之前，后续的js脚本是不能执行的，但是在这之前的js脚本是可以执行的
   *
   * js文件的下载和解析会阻塞GUI渲染过程，也就是会阻塞DOM和css的解析和渲染
   *
   * */
}

{
  /**
   * 浏览器中的线程和进程
   *  浏览器是多线程的
   *    1.Browser进程：
   *      浏览器的主进程，唯一，负责创建和销毁其他进程，网络资源的下载与管理，浏览器界面的展示、前进后退等
   *    2.GPU进程
   *      用于3D绘制等，最多一个
   *    3.第三方插件进程
   *      每种类型的插件对应一个进程，仅当使用该插件时才创建
   *    4.浏览器渲染进程（浏览器内核）
   *      内部是多线程的，没打开一个新页面就会创建一个进程，主要用于页面渲染，脚本执行，事件处理
   *
   *  渲染进程：
   *    浏览器的渲染进程是多线程的，页面的渲染，JavaScript的执行，事件的循环都在这个进程内执行的
   *
   *    1.GUI渲染线程
   *      负责渲染浏览器界面，当页面需要进行重绘或由于某种操作引发回流时，该线程就会执行
   *    2.JavaScript引擎线程
   *      JavaScript内核，负责处理JavaScript脚本程序、解析JavaScript脚本，运行代码等
   *    3.事件触发线程
   *      用来控制浏览器事件循环，注意这不归JavaScript引擎线程管理，当事件触发是，该线程会把事件添加到待处理队列的队尾，等待JavaScript引擎处理
   *    4.定时触发器线程
   *      setInterval和setTimeout所在线程，注意，w3c在HTML标准中规定，规定要求把setTimeout中地狱4ms的时间间隔算为4ms
   *    4.异步http请求线程
   *      在XMLHttpRequest连接后通过浏览器新开一个线程请求，将检测到状态变更时，将检测到状态变更时，如果设置有回调函数，异步线程就产生状态变更事件
   *      将这个回调再放入事件队列中，再由JavaScript引擎执行
   *
   *   tips:
   *    GUI渲染线程与JavaScript引擎线程是互斥的，当JavaScript引擎执行时GUI线程会被挂起（相当于冻结了）
   *    GUI 更新会被保存在一个队列中等到JavaScript引擎空闲时立即执行，
   *    所以如果JavaScript执行的时间过长，这样就会造成页面渲染不连贯，导致页面渲染加载阻塞
   *
   *   单线程的JavaScript
   *    所谓单线程，是指在JavaScript引擎中负责解释和执行JavaScript代码的线程唯一，同一时间上只能执行一件任务。
   * */
}

{
  /**
   * Reflect:
   *  是一个内置对象，它提供了JavaScript的操作方法，这些方法和Proxy里的handler 方法相同，Reflect不是一个函数对象，他是不可构造的（也就是不能通过new）
   * */
}

{
  /**
   * 尾调用：
   *  某个函数最后异步是调用另一个函数
   *
   * 尾调用优化：
   *
   * 尾递归：节省内存
   *  函数调用自身 成为递归，若果是尾调用自身，就称为尾递归
   *
   *  不会出现栈溢出错误（只存在一个调用记录），而递归会存在多个调用记录，因此会出现栈溢出的错误
   *
   * */

  function aa() {
    return function () {
      console.log('尾调用')
    }
  }

  const f = function () {

  }

  function aaa() {
    const y = f();
    return y;
  }

  function f1() {
    return f() + 1;
  }

}

/**
 * Iterator
 * */
