{
  /**
   * TODO
   * 堆和栈的区别：
   * */
}
{
  /**
   * 严格模式：
   *  消除JavaScript语法的一些不合理、不严谨之处，减少一些怪异行为
   *  消除代码运行的一些不安全之处，保证代码运行的安全
   *  提高编译器效率，增加运行速度
   *  为蔚来新版本JavaScript做好铺垫
   * */
}

{
  /**
   * Object.create：
   *  创建一个新对象，使用现有的对象来提供新创建的对象的__proto__
   * new：
   *  创建一个空对象，并将该对象的原型指向构造函数的原型，并将this指向改变至该对象
   *
   *  区别：
   *    Object.create 会丢失原构造函数的属性或方法、原型链指向原构造函数或者对象本身、作用对象是function或者Object
   *    new 保留原构造函数属性、原型链指向原构造函数的prototype属性、作用对象是function
   *
   * */

  const Base = function () {
    this.a = 1;
  }

  Base.prototype.getName = function () {
    return this.a;
  }

  const b = Object.create(Base);
  console.log(b.a);

  const bNew = new Base();
  console.log(bNew.a);

}

{
  /**
   * 一般来说url中只能使用英文字母、阿拉伯数字、和某些标点符号，不能使用其他文字和符号，会引发一些不必要的错误
   * encodeURIComponent 不被编码的符号 ; / ? : @ & = + $ , #
   * */
}

{
  /**
   * 变量提升：
   *  非严格模式下，未声明就使用该变量 （var）, 但是此时的值是个undefined
   * */
}

{
  /**
   * 箭头函数和普通函数
   * 区别：
   *  语法更简洁
   *  箭头函数不会创建自己的this
   *  箭头函数继承而来的this执行永远不变
   *  call/apply/bind 无法改变this的指向
   *  箭头函数不能用作构造函数
   *  箭头函数没有arguments
   *  箭头函数没有prototype
   * */
  const name = '外面';
  const obj = {
    name: '里面',
    getName: () => {
      return this;
    },
    getName2: function () {
      return this.name;
    }
  }

  console.log(obj.getName());
  console.log(obj.getName2());
}

{
  /**
   * websocket
   *  是基于tcp链接的，tcp链接有keepalive机制，检测双方是否正常，但是keepalive有一定的局限性
   *  1.client异常挂死，此时keepalive机制无法反馈真实的client状态
   *  2.client异常断电断网出现TCP假死keepalive并不能根本性解决问题，实际上互联网环境很不稳定
   *  3.ws在应用层，基于传输层，在ws中操作TCP很不方便
   *
   *  心跳解决了什么问题：
   *    定时发送消息，使连接不至于超时断开
   *    检测在正常连接的情况下，后端是否正常
   * */
}

{
  /**
   * service worker 是什么 TODO
   *  service worker本质上是充当web应用程序、浏览器与网络（可用时）之间的代理服务器。
   *  service worker 是一个注册在指定源和路径下的事件驱动worker。它才用JavaScript控制关联的页面或者网站，拦截并修改访问和资源请求，细粒度的缓存资源。
   *    你可以完全控制应用在特定情形（最常见的情形是网络不可用）下的表现
   *
   * */
}

{
  /**
   * PWA
   *  渐进式网页应用
   *  pwa 不是特指某一项技术，而是应用了多项技术的 web app。其核心技术包括App manifest（手机应用配置）、service worker（离线加载与缓存）、
   *    web push（消息推动与通知）、background sync （数据及时更新）等等
   * */
}

{
  /**
   * 判断一个对象是空对象{}
   * */
  const obj = {};
  console.log(JSON.stringify(obj) === '{}');
  console.log(Object.keys(obj).length === 0);
}

{
  /**
   * async/await 和 promise之间的关系
   * async/await 就是G 函数 + promise的语法糖
   * */
}

{
  /**
   * promise resolve 后面的语句是否执行
   * 执行
   * */

  new Promise((resolve, reject) => {
    resolve(1);
    console.log('lklklkl')
  }).then(res => {

  })
}

{
  /**
   * LRU缓存：least recently  used
   *  这种算法认为最近使用的数据是热门数据，下一次很大概率将会再次被使用。而最近很少被使用的数据，很大概率下一次不再用到。
   *  当缓存容量满了的时候，有限淘汰最近很少使用的数据
   *
   *  具体步骤：
   *    新数据直接插入到列表头部
   *    缓存数据被命中，将数据移动到列表头部
   *    缓存已满的时候，移除列表尾部数据
   *
   *  注意的问题：
   *    缓存命中率是缓存系统的非常重要的指标，若果缓存系统的缓存命中率过低，将会导致查询回流到数据库，导致数据库的压力升高
   *
   *    LRU算法优缺点：
   *      优势在于算法实现难度不大，对于热点数据，LRU效率会很好
   *      劣势在于对于偶发的批量操作，比如说批量查询历史数据，就可能使缓存中的热门数据被这些历史数据替换，造成缓存污染，导致缓存命中率下降，减缓了正常数据的查询
   *
   * */

  /**
   * 对于迭代器对象的值得获取
   * iterator.next().value()
   * */

  class LRUCache {
    constructor(size) {
      this.size = size;
      this.data = new Map();
    }

    put(key, val) {
      if (this.data.has(key)) {
        // 数据存在则进行删除
        this.data.delete(key);
        // 然后将数据添加至末尾
        this.data.set(key, val);
        return;
      }

      if (this.data.size >= this.size) {
        const firstKey = this.data.keys().next().value();
        this.data.delete(firstKey);
      }

      this.data.set(key, val);
    }

    get(key) {
      if (!this.data.has(key)) {
        return false;
      }
      const info = this.data.get(key);
      this.data.delete(key);
      this.data.set(key, info);
      return info;
    }
  }


  const maps = new Map([[1, 2], [2, 3], [3, 4]]);
  console.log(maps.keys(), maps.keys().next())
}


{
  /**
   * JSBridge ?
   *  JSBridge 是给JavaScript提供调用Native功能的接口，让混合开发中的前端部分可以方便的使用native的功能（例如：地理位置，摄像头）
   *  实际上，JSBridge 就像其名称 中的bridge的意义一样，是native和非native之间的，它的核心是构建native和非native间消息通信的通道，而且这个是双向的
   *
   *  双向通信的通道：
   *    js向native 发送消息：
   *      调用相关功能、通知Native 当前js的相关状态等
   *    Native向js发送消息：
   *      回溯调用结果、消失推送、通知js当前的native状态等
   * */
}

{
  /**
   * Babel ?
   *  babel 是一个JavaScript编译器
   *  是一个工具链，主要用于将才用es2015+ 语法编写的代码转换为向后兼容的JavaScript语法，一遍能够运行在当前和旧版本的浏览器或其他环境中。
   * */
}

{
  /**
   * npm ?
   *  npm 是node的包管理工具，它的诞生也极大的促进了前端的发展。
   *  使用场景：
   *    允许用户从npm服务器下载别人编写的第三方包到本地使用
   *    允许用户从npm服务器下载并安装别人编写的命令行程序到本地使用
   *    允许用户将自己编写的包或命令行程序上传到npm服务器供别人使用
   * */
}

{
  /**
   * csr 和 ssr
   *
   *  csr（客户端渲染）：
   *    对于html的加载，以React为例，我们习惯的做法是加载js文件中的react代码，去生成页面渲染，同时，js也完成页面交互事件的绑定
   *    有个问题，当js文件较大时，加载起来就会比较慢，到达页面渲染事件就会比较长，导致会出现白屏
   *
   *  ssr（服务端渲染）：
   *    由服务端直接生成html内容，返回给浏览器渲染首屏内容
   *    但是服务端渲染页面交互能力有限，如果要实现复杂交互，还是要通过引入js文件来辅助实现，我们吧页面的展示内容和交互写在一起，让代码执行两次（同构）
   *
   *  区别：
   *    最终的html代码是从客户端添加的还是从服务器
   *
   *
   * */
}

{
  /**
   * 微前端中的应用隔离是什么？一般怎么实现？
   *
   *  应用问题主要分为主应用和微应用，微应用和微应用之间的JavaScript执行环境隔离，css样式隔离
   *
   *  css 隔离
   *    彻底隔离css污染，可以才用css module或者命名空间的方式，给每个模块添加特定的前缀，即可互不干扰，
   *    可以采用webpack的postcss插件，在打包时添加特定的前缀
   *
   *  JavaScript 隔离
   *    每当微应用的JavaScript被加载时，他的核心实际上对全局对象的window的修改，以及一些全局事件的改变，
   *    eg: jq 这个js运行后，会在window上挂载一个window.$对象，对于其他库React、vue也不例外
   *
   *    为此，需要在加载和卸载每个微应用的同时，尽可能消除这种冲突和影响，最普遍的做法就是才用沙箱机制
   *
   *    沙箱机制的核心：让局部JavaScript运行时，对外部对象的访问和修改处在可控的方位内，即 无论内部怎么运行，都不会影响挖不得对象。
   *    通常在node.js端可以采用vm模块，而对于浏览器则需要结合with关键字和window.proxy 对象来实现浏览器端的沙箱
   *
   * */
}

{
  /**
   * 实现微前端的技术方案
   *  Nginx 路由转发
   *    优点：
   *      简单、快速、易配置
   *    缺点：
   *      切换应用时会触发浏览器刷新，影响体验
   *
   *  iframe嵌套：
   *    通信通过postMessage或者contentWindow
   *    优点：
   *      实现简单、子应用之间自带沙箱，天然隔离，互不影响
   *
   *    缺点：
   *      iframe的样式显示、兼容性等有局限性、太过简单
   *
   *  web component:
   *    每个子应用需要采用纯web Component 技术编写，是一套全新的开发模式
   *    优点：
   *      每个子应用拥有独立的script和css，也可以单独部署
   *    缺点：
   *      对于历史系统改造成本高，子应用通信较为复杂易踩坑
   *
   *  组合式应用路由开发：
   *    每个子应用独立构建和部署，运行时由父应用来进行路由管理，应用加载，启动，卸载以及通信机制
   *
   *    有点：
   *      纯前端改造，体验良好，可无感切换，子应用相互隔离
   *    缺点：
   *      需要设计和开发，由于父子应用处于同一页面运行，需要解决子应用的样式冲突，变量对象污染，通信机制等技术点
   *
   *
   * */
}

{
  /**
   * 微前端可以解决什么问题？
   *  拆分和细化
   *  整合历史系统
   *
   *  核心价值：
   *    技术栈无关
   *      主框架不限制接入应用的技术栈、微应用具备完全自主权
   *    独立开发、独立部署
   *      微应用仓库独立，前后端可独立开发，部署完成后主框架自动完成同步更新
   *    增量升级
   *      面对复杂场景，我们通常很难对一个已经存在的系统做全量的技术栈升级或者重构，
   *      而微前端是一种非常好的实施渐进式重构的手段和策略
   *    独立运行时
   *      每个微应用之间状态隔离、运行时状态不共享
   *
   * */
}

{
  /**
   * 微前端？
   *  是一种类似于微服务的架构，它将微服务的理念应用于浏览器端，即将web应用由单一的单体应用转变为多个小型前端应用聚合为一的应用
   *
   *  各个前端应用还可以独立开发、独立运行、独立部署。
   *  微前端不是单穿的前端框架或者工具，而是一套架构体系
   * */
}
