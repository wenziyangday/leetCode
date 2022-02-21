const proto = {
  foo: 'hello'
}

const obj = {
  foo: 'world',
  find() {
    return super.foo;
  }
}

console.log('super 指向当前对象的圆形对象', obj.find());

//  Object.setPrototypeOf()，为现有对象设置原型，返回一个新对象
Object.setPrototypeOf(obj, proto);
console.log('super 指向当前对象的圆形对象', obj.find());

// 克隆对象原型的属性
const clone1 = {
  __proto__: Object.getPrototypeOf(obj),
  ...obj,
}
const clone2 = Object.assign(Object.create(Object.getPrototypeOf(obj)), obj);
const clone3 = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));

Object.defineProperty(Object, 'myIs', {
  value: function (x, y) {
    if (x === y) {
      // 针对+0 不等于 -0的情况
      return x !== 0 || 1 / x === 1 / y;
    }
    // NaN 的情况
    return x !== x && y !== y;
  },
  configurable: true,
  enumerable: false,
  writable: true
});

/**
 * @description 既继承了属性同时有继承了其原型链
 * */
function clonePrototype(origin) {
  const originProto = Object.getPrototypeOf(origin);
  return Object.assign(Object.create(originProto), origin)
}

// true
console.log('Object.myIs(NaN, NaN)', Object.myIs(NaN, NaN));
// false
console.log('Object.myIs(+0, -0)', Object.myIs(+0, -0));
// false
console.log('NaN === NaN', NaN === NaN);
// true
console.log('+0 === -0', +0 === -0);

// 克隆对象
const aa = Object.assign({}, obj);
console.log('克隆对象', aa);
obj.name = '1234';
console.log('克隆对象', aa);

Object.defineProperty(Object.prototype, '__myProto__', {
  get() {
    const _this = Object(this);
    return Object.getPrototypeOf(_this);
  },
  set(proto) {
    if (this === undefined || this === null) {
      throw new TypeError();
    }

    if (!isObject(this)) {
      return undefined;
    }

    if (!isObject(proto)) {
      return undefined;
    }

    const status = Reflect.setPrototypeOf(this, proto);
    if (!status) {
      throw new TypeError();
    }
  }
});

function isObject(obj) {
  return Object(obj) === obj;
}

function entries(obj) {
  let arr = [];
  for (let key of Object.keys(obj)) {
    arr.push([key, obj[key]]);
  }
  return arr
}
