/** 类class */
class Point {
  constructor() {
    this.name = '12';
  }

  log() {
    console.log(this);
  }
}

const p = new Point();
console.log(p instanceof Point);
p.log();

class Point2 {
  constructor() {
    return Object.create(null);
  }
}

const p2 = new Point2();
console.log(p2 instanceof Point2);

/** mixin模式 多个对象（实例属性，静态属性，原型属性）合成一个新的对象，新对象具有各个组成成员的接口*/
function mix(...mixins) {
  class Mix {
    constructor() {
      for (const mixin of mixins) {
        // 拷贝实例属性
        copyProperties(this, new mixin());
      }
    }
  }

  for (const mixin of mixins) {
    // 拷贝静态属性
    copyProperties(Mix, mixin);
    //  拷贝原型属性
    copyProperties(Mix.prototype, mixin.prototype);
  }

  return Mix;
}

function copyProperties(target, source) {
  for (const ownKey of Reflect.ownKeys(source)) {
    if (ownKey !== 'constructor' && ownKey !== 'prototype' && ownKey !== 'name') {
      let desc = Object.getOwnPropertyDescriptor(source, ownKey);
      Object.defineProperty(target, ownKey, desc);
    }
  }
}

class Loggable {
  log() {
    console.log('Loggable', this);
  }
}

class Serializable {
  info() {
    console.log('Serializable', this);
  }
}

class DistributedEdit extends mix(Loggable, Serializable) {
  // ...
}

const aa = new DistributedEdit();
aa.log();
aa.info();
console.log(DistributedEdit.name);
