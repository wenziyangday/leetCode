// console.log('宏任务');
//
// setTimeout(() => {
//   console.log('宏任务');
// });
//
// Promise.resolve().then(() => {
//   console.log('微任务 Promise.then()');
// });
//
// console.log('宏任务2');
Promise.resolve().then(() => {
  console.log('微任务-1');

  setTimeout(() => {
    console.log('宏任务-1');
  });
});

setTimeout(() => {
  console.log('宏任务-2');
});

Promise.resolve().then(() => {
  console.log('微任务-2');
});

// requestAnimationFrame(() => {
//   console.log('宏任务-3');
// });
console.log('执行');
