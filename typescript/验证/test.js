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
function test(name, age, sex) {
    if (name)
        return name;
    if (age)
        return age;
    if (sex)
        return sex;
    return name + age + sex;
}
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    return Point;
}());
function printPoint(p) {
    console.log('printPoint:', p.x, p.y);
}
printPoint(new Point(1, 2));
function printPointIP(p) {
    console.log('printPointIP:', p.x, p.y);
}
printPointIP(new Point(1, 2));
function creatArr(length, x) {
    var result = [];
    for (var i = 0; i < length; i++) {
        result.push(x);
    }
    return result;
}
var aa = creatArr(10, '12');
console.log(aa, 'aa');
function swap(tuple) {
    return [tuple[1], tuple[0]];
}
var swap2 = function (tuple) {
    return [tuple[1], tuple[0]];
};
var ca = function (length, value) {
    return [];
};
var aaa = function (length, val) {
    return [];
};
function creatArrA(length, value) {
    return [];
}
var alarm = {
    age: 12,
    name: '张胜男',
    sex: 'nam'
};
console.log(alarm);
var A = /** @class */ (function () {
    function A(name, age) {
        this.name = name;
        this.age = age;
    }
    return A;
}());
var AA = /** @class */ (function (_super) {
    __extends(AA, _super);
    function AA() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AA;
}(A));
var a = new AA('', 100);
var AB = /** @class */ (function () {
    function AB(name) {
        this.name = name;
    }
    AB.prototype.log = function () {
        console.log(this.name);
    };
    return AB;
}());
var ab = new AB('zhan');
ab.log();
var Opts;
(function (Opts) {
    Opts[Opts["add"] = 0] = "add";
    Opts[Opts["edit"] = 1] = "edit";
})(Opts || (Opts = {}));
var opt = Opts.add;
console.log(opt);
if (opt) {
    console.log('我执行了', true);
}
else {
    console.log('我执行了', false);
}
var tba = {
    x: 10,
    y: 10,
    m: 100,
    mm: 100,
    z: 10,
    h: 10
};
console.log(tba);
function logIbb(x) {
    console.log(x);
}
logIbb({ z: 100, h: 100, m: 100 });
logIbb({ z: 100, h: 100, m: 100 });
logIbb({ z: 100, h: 100, m: 100, kl: '1212' });
var obj = {
    z: 100,
    h: 100,
    m: 100
};
logIbb(obj);
var n1ame = '12';
function log(name) {
    return name;
}
log('张胜男');
var arrowLog = log;
var objLog = log;
var iLog = log;
var iLogWhole = log;
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var person = new Person();
person.name = '张胜男';
person.logName = function (name) {
    return name;
};
function log2(name) {
    // console.log(name.length);
    return name;
}
function logSolved(name) {
    console.log(name.length, name);
    return name;
}
// logSolved(2)
logSolved({ length: 100, value: 1 });
function logName(obj, key) {
    return obj[key];
}
var objLog2 = {
    name: '张三定',
    age: '1000',
    slogan: '加油，vincent'
};
logName(objLog2, 'name');
// TS2345: Argument of type '"name1"' is not assignable to parameter of type '"name" | "age" | "slogan"'.
// logName(objLog2, 'name1')
function getProperty(obj, key) {
    return obj[key];
}
var x = { a: 1, b: 2, c: 3, d: 4 };
var Ta = 'toLowerCase';
var name2 = '张三';
var firstName = '张';
// 等价于
var firstNameEqual = '张';
function f() {
    return {
        x: 1,
        y: 2
    };
}
// type PP = typeof f();
// const pp: P = {
//   x: 12
// }
var tpa = {
    a: 1,
    b: '1'
};
var tIProps = {
    name: ''
};
var mmm = null;
console.log(mmm);
