const arr = new Array(1000000).fill('1');
let whileArr = [], forArr = [],
  forEachArr = [], mapArr = [];

console.time('while begin');
let i = 0, len = arr.length;
while (i < len) {
  whileArr.push(arr[i]);
  i += 1;
}
console.timeEnd('while begin');

console.time('for begin');
for (let i = 0, len = arr.length; i < len; i++) {
  forArr.push(arr[i]);
}
console.timeEnd('for begin');


console.time('forEach begin');
arr.forEach(x => {
  forEachArr.push(x);
})
console.timeEnd('forEach begin');

console.time('map begin');
mapArr = arr.map(x => x)
console.timeEnd('map begin');



