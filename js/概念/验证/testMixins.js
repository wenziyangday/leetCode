/**
 * @TODO
 * 装饰器 ES6提案方式
 * */
const Foo = {
  foo() {
    console.log('foolish');
  }
};

@mixins(Foo)
class MyClass {
}

function mixins(...list) {
  return function (target) {
    Object.assign(target.prototype, ...list)
  }
}

const myClass = new MyClass();
myClass.foo();
