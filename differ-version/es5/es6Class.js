'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var People = function People(name, age, sex, major) {
  _classCallCheck(this, People);

  this.name = name;
  this.age = age;
  this.sex = sex;
  this.major = major;
};

function PeoPleMan(name, age, sex, major) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.major = major;
}

PeoPleMan.prototype.te = function (name) {
  return this.name + name;
};

var Foo = function () {
  function Foo() {
    _classCallCheck(this, Foo);
  }

  _createClass(Foo, [{
    key: 'tee',
    value: function tee() {
      console.log(this, 'lklkklkl');
      return 'sdsd';
    }
  }, {
    key: 'getLo',
    get: function get() {
      return 'klkk';
    }
  }, {
    key: 'setLo',
    set: function set(va) {
      return 'klkk';
    }
  }]);

  return Foo;
}();

var foo = new Foo();
console.log(foo.tee());
console.log(PeoPleMan.prototype);

console.log(PeoPleMan('张三'));
console.log(Foo.constructor);

var people = new PeoPleMan('站内');
console.log(people.te('klkl '));

Number.prototype.add = function (num) {
  return this + num;
};
Number.prototype.ninus = function (num) {
  return this - num;
};

console.log(5 .add(2).ninus(10));

var promise = new Promise(function (resolve, reject) {});
console.log(promise);