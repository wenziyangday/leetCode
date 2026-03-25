// console.log(bbb, 'bbb');
// var bbb = 1;
// console.log(aaa, 'aaa');
// let aaa = 1;

console.log(v1);
var v1 = 100;
function foo() {
  console.log(v1);
  var v1 = 200;
  console.log(v1);
}
foo();
console.log(v1);
