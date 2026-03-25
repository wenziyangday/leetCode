let uid = 0;

class Observe {
  constructor() {
    this.uid = uid++;
    console.log(this, 'this');
  }
}

const ob = new Observe();
console.log(ob.uid);
const ob2 = new Observe();
console.log(ob2.uid);


function obd(param) {
  console.log(param);
}

const obj = {};

obd((obj.a = {name: '张三'}));
