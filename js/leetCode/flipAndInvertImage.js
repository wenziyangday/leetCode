/**
 * @description LeetCode 832题 翻转图像  水平翻转图片，即 数组逆序，反转图片 即数组中 0 -> 1, 1 -> 0 要求：先水平翻转图片，然后在反转图像
 * @param {number[][]} A
 * @return {number[][]}
 * */

// reverse 数组的逆序，并改变原来的数组
function flipAndInvertImage(A) {
  return A.map((a) => a.reverse().map((item) => item === 1 ? 0 : 1));
}

let reverseArr = flipAndInvertImage([[1, 1, 0], [1, 0, 1], [0, 0, 0]]);
console.log(reverseArr);
