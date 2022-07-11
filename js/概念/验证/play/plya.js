let a = {
  name: '张三'
};

console.log(a);

function F(name) {
  this.name = name;
}

const f = new F('长得');

console.log(f)
