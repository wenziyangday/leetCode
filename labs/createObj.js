// 创建对象 --- 工厂模式
function Employ(name) {
  this.name = name;
  this.say = function () {
    console.log(`工厂模式：我叫${this.name}`);
  }
}

function EmployFactory() {
  this.create = function (name) {
    return new Employ(name);
  };
}

const employFactory = new EmployFactory().create('张三的');
employFactory.say();
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++');

// 构造函数
function Person(name) {
  this.name = name;
  this.say = function () {
    console.log(`构造函数：我叫${this.name}`);
  }
}

const person = new Person('李四的');
person.say();
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++');

// 原型模式
function Job() {
}

Job.prototype.name = '程序员';
Job.prototype.say = function () {
  console.log(`这个工作是${this.name}`);
}

Job.prototype.name = '打工人';
Job.prototype.say = function () {
  console.log(`原型模式：这个工作是${this.name}吗`);
}

new Job().say();
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++');

// 构造函数和原型模式结合
function Hobby(name) {
  this.name = name;
}

Hobby.prototype.say = function () {
  console.log(`构造函数和原型模式结合：这个人的爱好是${this.name}`);
}

new Hobby('打篮球').say();
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++');

// 动态原型
function Habit(name) {
  this.name = name;

  if (typeof this.say !== 'function') {
    Habit.prototype.say = function () {
      console.log(`动态原型：这个人的习惯是${this.name}`);
    }
  }
}

new Habit('吃饭').say();
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++');

// 寄生模式
function Family(name) {
  let o = new Object();
  o.name = name;
  o.say = function () {
    console.log(`寄生模式：这个人的家庭是${this.name}`);
  }
  return o;
}

new Family('五好之家').say();
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++');


function foo() {

}

foo.prototype = {
  name: 'wen'
}

function bar() {

}

const proto = Object.create({
  ...foo.prototype,
  bar_prop: 'bar'
});

bar.prototype = proto;
const bars = new bar();

console.log(bars.name);
console.log(bars.bar_prop);
