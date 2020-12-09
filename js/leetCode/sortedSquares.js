/**
 * @description LeetCode 977题 有序数组的平方
 * @param {number[]} nums
 * @return {number[]}
 * */

// 入参有序
// 返回值是原值得平方数组 返回值有序

function sortedSquares(nums) {
  return nums.map(x => Math.pow(x, 2)).sort(((a, b) => a - b));
}

let num = sortedSquares([-4, -1, 0, 3, 10]);
console.log(num);
