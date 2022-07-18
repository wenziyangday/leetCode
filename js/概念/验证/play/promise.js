// async function async1 () {
//   await async2();
//   console.log('async1');
//   return 'async1 success'
// }
// async function async2 () {
//   return new Promise((resolve, reject) => {
//     console.log('async2')
//     resolve('error')
//   })
// }
// async1().then(res => console.log(res))


async function testSomething() {
  console.log("执行testSometing");
  return "testSometing";
}

async function testAsync() {
  console.log("执行testAsync");
  return Promise.resolve("hello async");
}

async function test() {
  console.log("test start...");
  const v1 = await testSomething();
  console.log(v1);
  const v2 = await testAsync();
  console.log(v2);
  console.log(v1, v2);
}

test();

var promise = new Promise(resolve => {
  console.log("promise start...");
  resolve("promise");
});
promise.then(val => console.log(val));

console.log("test end...");
