// let aa = () => {
//   console.log('我执行了1', Math.random());
// }
//
// aa();
//
// Promise.resolve().then(aa);
// console.log('我执行了2', Math.random());
// // Promise.try(aa)
//
// function foo() {
//   console.log(this.a);
// }
//
// var a = 2;
//
// (function () {
//   "use strict";
//
//   foo();
// })();
//
// function F() {
//   this.a = 3;
//   return {
//     a: 4,
//   }
// }
//
// const f = new F();
// console.log(f.a);

Promise.resolve(console.log(0))
  .then(() => {
    console.log(1);
    Promise.resolve(console.log(5))
      .then(() => console.log(3))
      .then(() => console.log(4))
      .then(() => console.log(6));
  })
  .then(() => console.log(2))
  .then(() => console.log(7));
console.log('=============================================')
// Promise.resolve()
//   .then(() => {
//     console.log(0);
//     return Promise.resolve(4);
//   })
//   .then((res) => {
//     console.log(4);
//   });
//
// Promise.resolve()
//   .then(() => {
//     console.log(1);
//   })
//   .then(() => {
//     console.log(2);
//   })
//   .then(() => {
//     console.log(3);
//   })
//   .then(() => {
//     console.log(5);
//   })
//   .then(() => {
//     console.log(6);
//   });
