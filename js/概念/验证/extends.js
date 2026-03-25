/**
 * 继承:
 * 构造函数，实例
 * 属性和方法定义有两种：
 *  1》构造函数内部定义（实例化属性，方法）
 *  2》原型定义（原型对象属性，方法）
 *
 * 优缺点：
 *  多次实例化
 *
 * class 类型 extends
 *  无法同时继承多个类
 *
 * 构造函数类型：
 * 1）原型链继承（原型式继承--直接继承父级实例化对象）:
 *  其核心思想是利用原型让一个引用类型继承另一个引用类型的属性和方法
 *  由于直接继承父级的实例，子类是无法传参（无法定制化）, 可以继承原型属性，方法
 *
 * 2）构造函数继承
 *  构造函数继承是指在子类构造函数内部调用父类构造函数，从而实现对父类实例属性的继承
 *  无法继承父类上的原型属性、方法(使用方法会报错 is not a function， 使用属性 undefined)
 *
 * 3）组合继承
 *  组合继承是将原型链继承和构造函数继承结合起来的一种继承方式
 *  同时继承了父级的实例属性和方法，同时也继承了父级原型上的属性和方法
 *
 * 4）原型式继承
 *  原型式继承是指通过使用一个已有的对象作为新对象的原型来创建新对象，从而实现继承。
 *  可以继承属性和方法，但是对于复合类型的属性，只是进行一层浅拷贝，并不能达到父子隔离
 *
 * 5）寄生式继承
 *  可以继承属性和方法，同时也能进行自我的方法扩展
 *  寄生式继承是指通过创建一个实现继承的函数，然后在函数内部以某种方式增强对象，最后返回这个对象
 *  缺点：增加对象的复杂度，和维护难度
 *
 * 6）寄生组合式继承
 *  寄生组合式继承是指通过借用构造函数来继承实例属性，然后通过将原型设置为一个继承父类原型的实例来继承父类原型上的属性和方法。
 *  减少构造次数，减少性能开销
 *
 * */
{
  console.log('===================================原型链继承===================================');

  // 原型链继承
  function Parent(name, age) {
    this.name = name;
    this.age = age;

    this.getName = function () {
      return this.name;
    }

    this.getAge = function () {
      return this.age;
    }
  }

  function Son(name, age) {
    this.name = name;
    this.age = age;
  }

  const parent = new Parent('原型链继承：父级name', 100);

  Son.prototype = parent;

  const sonPrototype = new Son('原型链继承：子级name', 1000);

  console.log(sonPrototype.getName());
}
{
  console.log('===================================构造函数继承=================================');

  // 构造函数继承
  function ParentF(name, age) {
    this.name = name;
    this.age = age;

    this.getName = function () {
      return this.name;
    }

    this.getAge = function () {
      return this.age;
    }
  }

  ParentF.prototype.getAGE = function () {
    console.log('我是原型对象上的方法');
  }

  ParentF.prototype.sex = 'sex';

  function Son(name, age, sex) {
    ParentF.call(this, name, age);
  }

  const sonCall = new Son('构造函数', 100);
  console.log(sonCall.name, sonCall.age, sonCall.sex);
}

{
  console.log('===================================组合继承=====================================');

  // 组合继承
  function ParentG(name, age) {
    this.name = name;
    this.age = age;

    this.getName = function () {
      return this.name;
    }

    this.getAge = function () {
      return this.age;
    }
  }

  ParentG.prototype.sex = 'sex';
  ParentG.prototype.getSex = function () {
    console.log(this.sex);
  }

  function Son() {
    ParentG.call(this, ...arguments);
  }

  Son.prototype = new ParentG();
  // 修改原始继承对象
  Son.prototype.constructor = Son;

  const son = new Son('组合继承', 100);
  console.log(son.name, son.sex);
  son.getSex();

}

{
  console.log('===================================原型式继承===================================');
  // 原型式继承
  const obj = {
    name: 'parent',
    sex: 'sex',
    friends: ['lucy', 'andy', 'kk'],
    getName: function () {
      console.log(this.name);
    }
  }

  obj.__proto__.getFriends = function () {
    console.log(this.friends, 'kkl');
  }

  obj.getName();
  obj.friends.push('jj');
  obj.getFriends();
  console.log('obj.name:', obj.name);

  const obj2 = Object.create(obj);
  obj2.name = 'son obj2';
  obj2.getName();
  obj2.friends.push('mm');
  obj2.getFriends();
  obj.getFriends();

  console.log('obj2.name:', obj2.name, 'obj.name:', obj.name);

}

{
  console.log('===================================寄生式继承===================================');
  let obj = {
    name: 'parent',
    friends: ['lucy', 'andy', 'kk'],
    getName: function () {
      console.log(this.name);
    }
  }

  obj.getName();
  obj.friends.push('jj');
  obj.getFriends();
  console.log('obj.name:', obj.name);

  function sonClone(ori) {
    let clone = Object.create(ori);
    clone.getFriends = function () {
      console.log(this.friends);
    }

    return clone;
  }

  const obj2 = sonClone(obj);
  obj2.name = 'son obj2';
  console.log('obj2.name:', obj2.name, 'obj.name:', obj.name);

  obj2.friends.push('nn');
  obj2.getFriends();
  obj.getFriends();
}

{
  console.log('===================================寄生组合继承=================================');

  function clone(P, S) {
    // 寄生
    S.prototype = Object.create(P.prototype);
    // 组合
    S.prototype.constructor = S;
  }

  function Parent(name, age) {
    this.name = name;
    this.age = age;

    this.getName = function () {
      console.log(this.name);
    }
  }

  function Son() {
    Parent.call(this, ...arguments);
    this.sex = 'sex';
  }

  Parent.prototype.getAge = function () {
    console.log(this.age);
  }

  clone(Parent, Son)

  Son.prototype.getSex = function () {
    console.log(this.sex);
  }

  Son.prototype.getName = function () {
    this.name = 'from son';
    console.log(this.name, 'from son');
  }

  const son = new Son('寄生组合继承', 1000);
  console.log('son.name:', son.name);
  son.getName();
  son.getAge();
  son.getSex();
  son.getName();

  console.log(Son.prototype)

}

{
  console.log('===================================es6继承===================================');

  class GrandP {
    constructor(major) {
      this.major = major;
    }
  }

  class Parent {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    getName = function () {
      console.log(this.name);
    }
  }

  class Son extends Parent {
    constructor(name, age, major) {
      super(name, age, major);
    }

    getName = () => {
      console.log(this.name, 'from son, 改写');
    }
  }

  const son = new Son('es6类继承', 100, 'chinese');
  console.log(son.name, son.major);
  son.getName();
}





