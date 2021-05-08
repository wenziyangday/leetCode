const a = BigInt(100);

console.log(a);
// console.log(a - 10);

const max = BigInt(Number.MAX_SAFE_INTEGER);

console.log(max * max * max);


try {
  // console.log(max + 1);
  // console.log(max - 1);
  // console.log(max * 1);
  // console.log(max / 1);
  console.log(max > 1);
  console.log(max < 1);
} catch (e) {
  console.log(e);
}

console.log(Object.prototype.toString.call(false));
console.log(typeof false);
