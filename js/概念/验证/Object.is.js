// true
console.log(+0 === -0);

// false
console.log(NaN === NaN);

console.log(Object.is(NaN, NaN));

// true
console.log(null === null);

console.log(1 / 0 === 1 / 0, 'lklkkl');

console.log(Object.is(1 / 0, -1 / 0));

console.log(-0 === -0);

// Object.is 和 === 之间的关系
function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

const a = {};
const b = a;
console.log({} === {});
console.log(Object.is({}, {}));

b.name = 1;
console.log(a === b, a, b);
console.log(Object.is(a, b));


console.log('========================相等性判断的特殊值NaN、+0、-0===========================');

console.log('--------------------------------三等-----------------------------------------');
console.log(NaN === NaN, 'NaN');
console.log(+0 === +0, '+0');
console.log(-0 === -0, '-0');
console.log(0 === +0, '0 +0');
console.log(0 === -0, '0 -0');
console.log(+0 === -0, '+0 -0');

console.log('--------------------------------两等-----------------------------------------');
console.log(NaN == NaN, 'NaN');
console.log(+0 == +0, '+0');
console.log(-0 == -0, '-0');
console.log(0 == +0, '0 +0');
console.log(0 == -0, '0 -0');
console.log(+0 == -0, '+0 -0');

console.log('---------------------------------is-----------------------------------------');
console.log(Object.is(NaN, NaN), 'NaN');
console.log(Object.is(+0, +0), '+0');
console.log(Object.is(-0, -0), '-0');
console.log(Object.is(0, +0), '0 +0');
console.log(Object.is(0, -0), '0 -0');
console.log(Object.is(+0, -0), '+0 -0');




