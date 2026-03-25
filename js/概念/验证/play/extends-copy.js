{
  function Parent(name, age) {
    this.name = name;
    this.age = age;
  }

  Parent.prototype.sex = 'sex';
  Parent.grade = '年级';
  Parent.prototype.getName = function () {
    console.log(this.name);
  }

  function Son() {

  }

  Son.prototype = new Parent('原型链继承实例', 100);
  let son = new Son();
  console.log(son.name);
  console.log(son.sex);
  console.log(Parent);
  son.getName();
}

{
  function Parent(name, age) {
    this.name = name;
    this.age = age;
  }

  Parent.sex = 'sex';
  Parent.prototype.sexg = 'sexg';

  Parent.prototype.getName = function () {
    console.log(this.name);
  }

  function Son() {
    Parent.call(this, ...arguments);
  }

  let son = new Son('构造函数继承', 1000);
  console.log(son.name, son.sex, son.sexg);
  // son.getName();

}

{
  function Parent(name, age) {
    this.name = name;
    this.age = age;
  }

  Parent.prototype.sex = 'sex';
  Parent.prototype.getName = function () {
    console.log(this.name);
  }

  function Son() {
    Parent.call(this, ...arguments);
  }

  Son.prototype = new Parent();
  Son.prototype.constructor = Son;


  const son = new Son('组合继承', 100);
  console.log(son.name, son.sex);
  son.getName();
}


{
  const obj = {
    name: '原型式继承',
    friends: [1, 2, 3, 4],
    getName() {
      console.log(this.name, '号');
    }
  }

  const b = Object.create(obj);

  b.name = '100';

  b.getName = function () {
    console.log('jkjkjjk')
  }
  console.log(b.name, obj.name);
  b.getName();
  obj.getName();
  b.friends.push('666');
  console.log(b.friends, obj.friends)
}


{
  const obj = {
    name: '寄生继承',
    friends: [2, 3, 4],
    getName() {
      console.log(this.name);
    }
  }

  function clone(obj) {
    const c = Object.create(obj);
    c.getAge = function () {
      console.log('获取年龄');
    }

    return c;
  }

  const d = clone(obj);
  d.name = '10000'
  console.log(d.name, obj.name);
  d.friends.push('kkllk');
  console.log(d.friends, obj.friends)
}

{
  function clone(Parent, Son) {
    Son.prototype = Object.create(Parent.prototype);
    Son.prototype.constructor = Son;
  }

  function Parent(name, age) {
    this.name = name;
    this.age = age;
  }

  function Son() {
    Parent.call(this, ...arguments);
  }

  clone(Parent, Son);


}
