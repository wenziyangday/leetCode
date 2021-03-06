/**
 * @description leetCode 剑指offer 58题 左旋转字符串
 * @param {string} s
 * @param {number} n
 * @return {string}
 * */

function reverseLeftWords(s, n) {
  let a = s.split('');
  return [...a, a.splice(0, n)].toString().replace(/\,/g, '');
}

const reverseLeftWord = reverseLeftWords('abcdefg', 2);
console.log(reverseLeftWord);
