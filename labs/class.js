// 构造函数
function Component(props, context, updater) {
  this.props = props;
  this.context = context;
  this.updater = updater;
}
Component.prototype.isRC = {};

// 类
class PureComponent {
  constructor(props, context, updater) {
    this.props = props;
    this.context = context;
    this.updater = updater;
  }
}
PureComponent.prototype.isRC = {};


const com = new Component();
const pCom = new PureComponent();


console.log('构造函数：', Component);
console.log('class  ：', PureComponent);
console.log('实   例：', com);
console.log('实   例：', pCom);

console.log('-------------------------prototype--------------------------');
console.log('构造函数：', Component.prototype);
console.log('class  ：', PureComponent.prototype);
console.log('实   例：', com.prototype);
console.log('实   例：', pCom.prototype);

console.log('-------------------------prototype.prototype--------------------------');
console.log('构造函数：', Component.prototype.prototype);
console.log('class  ：', PureComponent.prototype.prototype);
console.log('实   例：', com.prototype?.prototype);
console.log('实   例：', pCom.prototype?.prototype);

console.log('-------------------------__proto__--------------------------');
console.log('构造函数：', Component.__proto__);
console.log('class  ：', PureComponent.__proto__);
console.log('实   例：', com.__proto__);
console.log('实   例：', pCom.__proto__);

console.log('-------------------------__proto__.__proto__--------------------------');
console.log('构造函数：', Component.__proto__.__proto__);
console.log('class  ：', PureComponent.__proto__.__proto__);
console.log('实   例：', com.__proto__.__proto__);
console.log('实   例：', pCom.__proto__.__proto__);

console.log('-------------------------constructor--------------------------');
console.log('构造函数：', Component.constructor);
console.log('class  ：', PureComponent.constructor);
console.log('实   例：', com.constructor);
console.log('实   例：', pCom.constructor);

console.log('-------------------------constructor.constructor--------------------------');
console.log('构造函数：', Component.constructor.constructor);
console.log('class  ：', PureComponent.constructor.constructor);
console.log('实   例：', com.constructor.constructor);
console.log('实   例：', pCom.constructor.constructor);


