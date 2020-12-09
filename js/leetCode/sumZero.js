/**
 * @description LeetCode 1304题 和为零的N个唯一整数
 * @param {number} n
 * @return {number[]}
 * */

// 和为0
// 唯一整数

function sumZero(n) {
  if (n === 1) {
    return [0]
  }
  let arr = new Array(n - 1).fill(n).map(() => parseInt((Math.random() * n).toString()));
  let sum = arr.reduce((a, b) => a + b);
  return [...arr, -sum];
}

let sum = sumZero(5);
console.log(sum);
