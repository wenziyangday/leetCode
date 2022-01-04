class ImplementsExtends {
}


interface IeVO {
  name: string;
  age: number;

  log(): void
}


class ImplementsExtends03 {
  name: string

  log() {
    console.log('这是一个类，用于类的实现')
  }
}

// 实现一个类
class ImplementsExtendsClass implements ImplementsExtends03 {
  name: string;

  log(): void {
  }

}

// 实现一个接口
class ImplementsExtendsClass01 implements IeVO {
  name = '李四';
  age = 1000;

  constructor() {
    this.name = '10000';
    this.age = 10;
  }

  log() {
    console.log('类实现了一个接口', this.name, this.age);
  }
}

// 接口继承一个接口
interface IeVO01 extends IeVO {
  sex: string;
}

class ImplementsExtendsClass02 implements IeVO01 {
  name = "张胜男";
  age = 10000;
  sex = '男';

  log() {
    return "console.log('类实现了一个继承的接口')";
  }
}

class InterfaceClass {
  age: number;

  constructor(age) {
    this.age = age;
  }

  log() {
    console.log(this.age, '接口继承一个类');
  }
}

// 接口继承一个类
interface IeVO02 extends InterfaceClass {
  sonAge: number,
}

class ImplementsInterfaceExtendsClass implements IeVO02 {
  age = 1000;
  sonAge = 1000000;

  constructor(age, sonAge) {
    this.sonAge = age;
    this.age = age;
  }

  log() {
    console.log('来自一个接口继承类中的类的实现', this.age, this.sonAge);
  }
}

class ExtendsClass04 {
  name: string;
  age: number;

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  log() {
    console.log('这是一个类111111');
  }
}

// 类继承一个类
class ImplementsExtends01 extends ExtendsClass04 {
  constructor(name, age) {
    super(name, age);
  }

  // log() {
  //   console.log('在一个派生类中使用super');
  // }


}

const implementsExtendsClass01: ImplementsExtendsClass01 = new ImplementsExtendsClass01();
console.log(implementsExtendsClass01.age, implementsExtendsClass01.name);
implementsExtendsClass01.log();

const implementsExtendsClass02: ImplementsExtendsClass02 = new ImplementsExtendsClass02();
console.log(implementsExtendsClass02.age, implementsExtendsClass02.name);
implementsExtendsClass02.log();

const implementsInterfaceExtendsClass: ImplementsInterfaceExtendsClass = new ImplementsInterfaceExtendsClass(100, 10);
console.log(implementsInterfaceExtendsClass.age, implementsInterfaceExtendsClass.sonAge);
implementsInterfaceExtendsClass.log();

const implementsExtends01: ImplementsExtends01 = new ImplementsExtends01('张三', 1000);
console.log(implementsExtends01.name, implementsExtends01.age);
implementsExtends01.log();



