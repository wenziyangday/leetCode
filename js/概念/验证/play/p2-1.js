{
  /**
   * 如何确保你的构造函数是被new调用，而非作为普通函数使用？
   * 只需要在构造函数中添加一个判断就可以了
   *
   * es6 通过引入new.target来进行判断，当不是通过new创建的或者不是Reflect.construct 调用的，new.target 会返回一个undefined
   * class 内部使用new.target 返回类本身
   * 在class实现中，子类继承父类，new.target 返回的是子类本身
   *
   * 可以通过new.target 进行抽象类限制，使抽象类不能进行单独实例化
   *
   * */

  function P() {
    if (!(this instanceof P)) {
      throw new Error('')
    }
  }

  function PP() {
    if (!(new.target)) {
      throw new Error();
    }
  }

  class Animal {
    constructor() {
      if (new.target === Animal) {
        throw new Error('抽象类并不能进行单独使用')
      }
    }
  }
}

{
  /**
   * AST(抽象语法树)：对源代码的抽象语法结构的树状表现形式
   *
   * 如何生成AST?
   *  1.分词
   *    将代码字符串分割成语法单元组
   *
   *  2.语义分析
   *    将分词得到的语法单元进行一个整体的组合，分析确定语法单元之间的关系。
   *
   * */
}

{
  /**
   * flexible 原理：
   *  rem的原理就是份，我们根据设计稿得到元素的份，写到代码中的也是份，
   *  现在只要动态改变html的基准值，就能够在不同屏幕下适配，从而还原设计稿尺寸了。
   * */
}

{
  /**
   * sort 方法实现 TODO
   * */
}

{
  /**
   * ES6新特性
   *  1.let、const 块级作用域 区别var
   *  2.解构赋值
   *  3.模板字符串 ``
   *  4.字符串方法扩展
   *    includes
   *    startsWith
   *    endWith
   *  5.参数默认值和剩余参数
   *  6.展开数组 ...
   *  7.箭头函数
   *  8.对象的字面量增强
   *    同名的可以省略
   *    可以直接使用fun
   *    可以使用计算属性
   *  9.Object.assign 进对象的合并、复制（浅复制）
   *  10.Object.is
   *    没有隐式转换
   *    +0 === -0 false
   *    NaN === NaN true
   *  11.proxy
   *    代理一个对象的所有，包括读写、和各种操作的监听
   *    对别Object.defineProperty:
   *      1.拥有很多defineProperty没有的方法
   *      2.对数组的监听更加方便
   *      3.以非侵入的方式对对象进行监听
   *  12.Reflect
   *    集成了Object操作方法
   *  13.Promise
   *    解决异步编程中的嵌套过深的问题
   *  14.class&静态方法&继承
   *    使用class关键字定义类
   *    使用static修饰的方法，可以直接通过类名调用，而不需要实例化，this指向的不是实例，而是当前类
   *    继承 extends 子类通过extends继承父类，可以继承父类的所有属性
   *  15.Set&Map
   *    set是一种类似于数组的数据结构
   *    元素唯一性
   *    可以通过add进行元素添加
   *
   *    Map 可以有序 存储键值对
   *    map 中键可以是任意类型的数据，值当然也可以是任意类型的值
   *  16.Symbol
   *    js新增的基本数据类型,用来创造不同值得类型
   *  17.for...of
   *    遍历拥有迭代器类型数据，同时可以随时进行break
   *  18.迭代器模式
   *    通过Symbol.iterator 对外提供统一的接口，获取内部数据
   *    外部可以通过for。。。of进行数据迭代
   *  19.Generator生成器
   *    形式 function* a() {}
   *    一般配合yield关键字使用
   *    惰性执行，调next才会往下执行
   *    主要是用来解决异步回调过深的问题
   *  20.includes
   *    判断数组中是否存在某个元素，可以识别NaN, 解决indexOf无法识别NaN的问题
   *  21.运算符
   *  22.values函数
   *    Object.values()
   *  23.entries 函数
   *    返回键值对
   *  24.Object.getOwnPropertyDescriptors(obj)
   *    获取对象的描述信息
   *  25.padStart、padEnd
   *    对字符串头部或者尾部追加字符串
   *
   * */
}

{
  /**
   * 实现一个链式调用
   * 链式调用就是在调用完成后将自身实例返回
   * */

  class ChainDo {
    constructor(val) {
      this.arr = [...val];
      return this;
    }

    get() {
      console.log(this.arr);
      return this;
    }

    push(val) {
      this.arr.push(val);
      console.log(this.arr);
      return this;
    }

    pop() {
      this.arr.pop();
      console.log(this.arr);
      return this;
    }
  }

  const chainPop = new ChainDo([1, 2, 3]);
  console.log(chainPop.get().pop().push(10).arr);

}

{
  /**
   *  cookie、localStorage、sessionStorage三者之间区别
   *    生命周期
   *      cookie：可以设置过期时间，若果没有设置则会话关闭后消失
   *      localStorage: 除非手动清除，否则永久存在
   *      sessionStorage: 当前会话下有效，关闭页面或者浏览器会清除
   *    存放数据大小
   *      cookie：4k
   *      localStorage、sessionStorage大约5M左右
   *    http请求
   *      cookie：每次http请求都会携带在其请求头中，若果cookie过多会带来性能问题
   *      localStorage、sessionStorage：仅在客户端保留不参与http请求
   *    易用性
   *      cookie：源生cookie不友好，需要进行封装
   *      localStorage、sessionStorage：源生接口相对好用，需要对Object和Array进行适配
   *    应用场景
   *      cookie：一般对用户登录识别来说比较友好，不可以跨域使用
   *      localStorage：可以跨页面进行数据传输
   *      sessionStorage：可以用来存放一些临时数据让其不会随这刷新页面而消失
   *
   * */
}

{
  /**
   * 跨域处理
   *  1.CORS
   *  2.Nginx代理转发
   *  3.node中间件代理跨域
   *  4.postMessage
   *  5.JSONP
   * */
}


{
  /**
   * 多个标签页之间的通信
   *  1.postMessage
   *  2.localStorage
   *  3.websocket
   * */
}

{
  /**
   * canvas 图片跨域问题
   *  给img 设置crossOrigin属性
   * */

  function canvasCORS(url) {
    const canvas = document.querySelector('.canvas');
    const context = canvas.getContext('2d');
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      context.drawImage(this, 0, 0);
      context.getImageData(0, 0, img.width, img.height);
    }

    img.src = url;
  }
}

{
  /**
   * es5中的类和es6的class区别：
   *  1.class 必须new进行实例化，不能够直接执行
   *  2.class 类不存在变量提升，
   *  3.class 类无法遍历 实例原型链上的属性和方法
   *  4.new.target 会返回new 构建实例的构造函数，不是通过new 的返回undefined
   *  5.class 类有静态方法，可以通过类名直接调用，无需实例化
   * */
}

{
  /**
   * promise 输出问题
   *  promise 一旦状态改变，则无法更改（promise中无论有几个resolve都会在 状态变更后率先执行第一个resolve，后续不在执行）
   *  finally 无论promise状态是resolve还是rejected 都将执行（也就是promise的状态变更后就会执行finally，）
   *
   *  async 函数中await 后的promise 如果没有返回值则会跳过后续执行
   *  嵌套promise 子promise 状态不会影响兄弟promise已经父级状态，then接收的是resolve处理后的结果，
   * */

  // const p1 = new Promise((resolve) => {
  //   // 3
  //   setTimeout(() => {
  //     resolve('resolve3');
  //     console.log('timer1')
  //   }, 0)
  //   resolve('resolve1');
  //   resolve('resolve2');
  // }).then(res => {
  //   // 1
  //   console.log('res', res)
  //   setTimeout(() => {
  //     console.log('p1', p1)
  //   }, 1000)
  // }).finally(res => {
  //   // 2
  //   console.log('finally', res)
  // });
  //
  // console.log('=======================================================================================================')
  // const async1 = async () => {
  //   console.log('async1');
  //   setTimeout(() => {
  //     console.log('timer1')
  //   }, 2000)
  //   await new Promise(resolve => {
  //     console.log('promise1')
  //   });
  //   console.log('async1 endWEWE')
  //   return 'async1 success'
  // }
  // console.log('script start');
  // async1().then(res => console.log(res));
  // console.log('script end');
  // Promise.resolve(1)
  //   .then(2)
  //   .then(Promise.resolve(3))
  //   .catch(4)
  //   .then(res => console.log(res))
  // setTimeout(() => {
  //   console.log('timer2')
  // }, 1000)
}

{
  setTimeout(function () {
    console.log('100ms后', '100')
  }, 100);

  setTimeout(function () {
    console.log('200ms后', '200')
  }, 200);

  setTimeout(function () {
    console.log('10ms后', '10')
  }, 10);
}

{
  /**
   * 事件循环：
   * 常规代码 -> 微任务 ->宏任务（不同的setTimeout 要和delay 有关系）
   * */
}

{
  /**
   * 全排列
   * */
}


