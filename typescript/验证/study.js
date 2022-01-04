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
var num = 123;
function nums(num) {
    return 10 * num;
}
var _name = {
    name: '张三',
    age: 100,
    married: false
};
console.log(_name);
// 内联类型注解
var _name2 = {
    name: '张三-2',
    age: 10,
    married: false
};
console.log(_name2);
var aNull = null;
var aAny = '12' || 10 || false || {} || null || undefined;
function log(msg) {
    console.log(msg);
}
// 泛型注解
function reverse(items) {
    var result = [];
    for (var i = items.length; i >= 0; i -= 1) {
        result.push(items[i]);
    }
    return result;
}
var aa = reverse([1, '2', 3]);
aa = ['1', '2'];
// 联合类型
var bb = 1 || 'op';
console.log(bb);
//
var cc = ['12', 10, false];
function ex() {
}
var people = {
    name: '李四',
    age: 100,
    married: false,
    major: '看看了',
    logName: function (val) {
    }
};
var __re = new Rse();
// 类型断言 不推荐使用
var a = {};
var _a = {};
// 最好是
var __aa = {
    name: '张三',
    age: 100,
    married: false
};
var Enum;
(function (Enum) {
    Enum["one"] = "one";
    Enum["two"] = "two";
})(Enum || (Enum = {}));
var _cc = 'one';
var obj = {
    aa: '1212'
};
obj.aa = 'kkkl';
var readonly01 = {
    name: 'kkk'
};
var aaa = {
    name: 'kjjkkj'
};
var PPP = /** @class */ (function () {
    function PPP(name, age) {
        this.name = name;
        this.age = age;
        this.subject = "kjmjkkj";
    }
    PPP.prototype.aa = function () {
        console.log('kk');
    };
    PPP.prototype.bbb = function () {
        console.log('bbb');
    };
    return PPP;
}());
var SubPPP = /** @class */ (function (_super) {
    __extends(SubPPP, _super);
    function SubPPP(name, age) {
        return _super.call(this, name, age) || this;
    }
    SubPPP.prototype.aaa = function () {
        this.aaa();
    };
    SubPPP.prototype.bbbb = function () {
        this.bbb();
    };
    return SubPPP;
}(PPP));
var ppp = new PPP('张三', 100);
var subPPP = new SubPPP('张三', 100);
console.log(ppp.age);
console.log(subPPP.aaa());
console.log(subPPP.bbbb());
var getUser = function (user) { return user.name; };
var names = getUser({ color: 'red' });
console.log(names);
