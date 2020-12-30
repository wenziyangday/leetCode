// 对象继承---原型链继承
function Family(name) {
  this.name = name;
}

function Family2() {
}

Family2.prototype = new Family('原型链继承');

console.log(new Family2().name);
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++');
// 优点是：子类可以访问父类中的属性和方法
// 缺点是：创建子类实例时，不能往父类中函数添加参数、


class Polygon {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Square extends Polygon {
  constructor(sideLength) {
    super(sideLength, sideLength);
  }

  get area() {
    return this.height * this.width;
  }

  set sideLength(newLength) {
    this.width = newLength;
    this.height = newLength;
  }
}

const square = new Square(2);
console.log(square.area);


square.sideLength = 100;
console.log(square.area);
console.log('++++++++++++++++++++++++++++++++++++++++++++++++++++');

// 借用构造函数
function SuperType() {
  this.colors = ['red', 'white', 'blue', 'green'];
  this.fn = function () {
    console.log(`验证父级方法子类型不可见`);
  }
}

function SubType() {
  SuperType.call(this);
}

const subType = new SubType();
console.log(`构造函数：${subType.colors}`);
subType.fn();

// 优点是：可以修改父级的数据（感觉就是我实现了继承）
// 缺点是：父类的原型（SuperType.prototype）  的方法和属性 在子类中是不可见的(子类中无法 直接 获取父类的原型)

