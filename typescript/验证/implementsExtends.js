var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ImplementsExtends = /** @class */ (function () {
    function ImplementsExtends() {
    }
    return ImplementsExtends;
}());
var ImplementsExtends03 = /** @class */ (function () {
    function ImplementsExtends03() {
    }
    ImplementsExtends03.prototype.log = function () {
        console.log('这是一个类，用于类的实现');
    };
    return ImplementsExtends03;
}());
// 实现一个类
var ImplementsExtendsClass = /** @class */ (function () {
    function ImplementsExtendsClass() {
    }
    ImplementsExtendsClass.prototype.log = function () {
    };
    return ImplementsExtendsClass;
}());
// 实现一个接口
var ImplementsExtendsClass01 = /** @class */ (function () {
    function ImplementsExtendsClass01() {
        this.name = '李四';
        this.age = 1000;
        this.name = '10000';
        this.age = 10;
    }
    ImplementsExtendsClass01.prototype.log = function () {
        console.log('类实现了一个接口', this.name, this.age);
    };
    return ImplementsExtendsClass01;
}());
var ImplementsExtendsClass02 = /** @class */ (function () {
    function ImplementsExtendsClass02() {
        this.name = "张胜男";
        this.age = 10000;
        this.sex = '男';
    }
    ImplementsExtendsClass02.prototype.log = function () {
        return "console.log('类实现了一个继承的接口')";
    };
    return ImplementsExtendsClass02;
}());
var InterfaceClass = /** @class */ (function () {
    function InterfaceClass(age) {
        this.age = age;
    }
    InterfaceClass.prototype.log = function () {
        console.log(this.age, '接口继承一个类');
    };
    return InterfaceClass;
}());
var ImplementsInterfaceExtendsClass = /** @class */ (function () {
    function ImplementsInterfaceExtendsClass(age, sonAge) {
        this.age = 1000;
        this.sonAge = 1000000;
        this.sonAge = age;
        this.age = age;
    }
    ImplementsInterfaceExtendsClass.prototype.log = function () {
        console.log('来自一个接口继承类中的类的实现', this.age, this.sonAge);
    };
    return ImplementsInterfaceExtendsClass;
}());
var ExtendsClass04 = /** @class */ (function () {
    function ExtendsClass04(name, age) {
        this.name = name;
        this.age = age;
    }
    ExtendsClass04.prototype.log = function () {
        console.log('这是一个类111111');
    };
    return ExtendsClass04;
}());
// 类继承一个类
var ImplementsExtends01 = /** @class */ (function (_super) {
    __extends(ImplementsExtends01, _super);
    function ImplementsExtends01(name, age) {
        return _super.call(this, name, age) || this;
    }
    return ImplementsExtends01;
}(ExtendsClass04));
var implementsExtendsClass01 = new ImplementsExtendsClass01();
console.log(implementsExtendsClass01.age, implementsExtendsClass01.name);
implementsExtendsClass01.log();
var implementsExtendsClass02 = new ImplementsExtendsClass02();
console.log(implementsExtendsClass02.age, implementsExtendsClass02.name);
implementsExtendsClass02.log();
var implementsInterfaceExtendsClass = new ImplementsInterfaceExtendsClass(100, 10);
console.log(implementsInterfaceExtendsClass.age, implementsInterfaceExtendsClass.sonAge);
implementsInterfaceExtendsClass.log();
var implementsExtends01 = new ImplementsExtends01('张三', 1000);
console.log(implementsExtends01.name, implementsExtends01.age);
implementsExtends01.log();
