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

/** 原型链继承：无法对父对象进行修改传参、子对象修改了父对象的引用类型，则所有的子实例都将变化 */
{
  function Parent() {
    this.name = 'name';
  }

  Parent.prototype.getName = function () {
    return this.name;
  }

  function Son() {

  }

  Son.prototype = new Parent();
  Son.prototype.constructor = Son;
}

/** 构造函数继承: 无法获取父级原型上的属性和方法 */
{
  function Parent() {
    this.name = 'name';
  }

  Parent.prototype.getName = function () {
    return this.name;
  }

  function Son() {
    Parent.call(this, ...arguments);
  }

}

/** 组合继承：每次实例都会进行两次Parent 构造函数 */
{
  function Parent() {
    this.name = 'name';
  }

  Parent.prototype.getName = function () {
    return this.name;
  }

  function Son() {
    Parent.call(this, ...arguments);
  }

  Son.prototype = new Parent();
  Son.prototype.constructor = Son;

}

/** 寄生组合继承 */
{
  function Parent() {
    this.name = 'name';
  }

  Parent.prototype.getName = function () {
    return this.name;
  }

  function Son() {
    Parent.call(this, ...arguments);
  }

  Son.prototype = Object.create(Parent.prototype);
  Son.prototype.constructor = Son;

}

/** 图片懒加载 */
function loadImg(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = resolve;
    img.onerror = reject;
    img.src = url;
  });
}

/** 二分查找：从一个有序数组中，从中间进行数据检索，直到找到对应数值的索引为止，否则，返回-1 */
{
  function search(arr, ele) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
      let mid = parseInt(`${(start + end) / 2}`);
      if (arr[mid] === ele) {
        return mid;
      } else if (arr[mid] < ele) {
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }

    return -1;
  }
}


/**
 * 相等性判断：
 * == 默认会进行隐式转换，两侧是相同类型则直接进行比较，null == undefined, +0 == -0
 * 其他类型就是先转换为字符串，然后转换为数字进行比较
 * */
