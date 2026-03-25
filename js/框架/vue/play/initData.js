function getData(data, vm) {
  return data.call(vm, vm)
}

function data() {
  return {
    a: '张三'
  }
}

let a = getData(data, {});
console.log(a);

const obj = {};

function updateO(params) {
  params.a = 'zhangsna';
  return params;
}

const aa = updateO(obj);
console.log(obj, aa)

const ab = {};
const ac = (ab._c = Object.create(null));
ac.age = 100;
console.log(ac, ab);
