console.log('a')

async function f() {
  console.log('b');
  let a = await Promise.resolve('100');
  console.log(a);
  console.log('e')
}

f();

console.log('d')

