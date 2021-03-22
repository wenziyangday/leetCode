class People {
  constructor(name, age, sex, major) {
    this.name = name;
    this.age = age;
    this.sex = sex;
    this.major = major;
  }
}


function PeoPleMan(name, age, sex, major) {
  this.name = name;
  this.age = age;
  this.sex = sex;
  this.major = major;

}

PeoPleMan.prototype.te = function (name) {
  return this.name + name;
}




class Foo {
  get getLo() {
    return 'klkk';
  }

  set setLo(va) {
    return 'klkk';
  }

  tee() {
    console.log(this, 'lklkklkl')
    return 'sdsd';
  }
}
const foo = new Foo();
console.log(foo.tee())
console.log(PeoPleMan.prototype)

console.log(PeoPleMan('张三'));
console.log(Foo.constructor);

const people = new PeoPleMan('站内');
console.log(people.te('klkl '));

Number.prototype.add = function (num) {
  return this + num;
}
Number.prototype.ninus = function (num) {
  return this - num;
}

console.log((5).add(2).ninus(10))


const promise = new Promise((resolve, reject) => {});
console.log(promise)
