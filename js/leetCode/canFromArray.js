/**
 * @description LeetCode 1640题 能否连接形成数组
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 * */

// 题解：分析 [1, 2, 3, 4].toString() => 1,2,3,4 但是这个对于[12].toString() => 12 和 [1].toString() => 1
// 由于没有做数组元素隔离，因此会出现 [12].toString().indexOf([1].toString()) !== -1 这种情况
// 再者 只要隔离了元素 就可以了 (arr.toString() + ',').indexOf(pieces[i].toString() + ',')
// 总结：在数组中 判断多个连续元素是否存在于数组 可以使用字符串 方法，但要注意的是单个 元素包含的情况 如 [12, 13] 不包含 [1] 但是使用indexOf() 机会穿线问题，因此需要 进行元素隔离

function canFromArray(arr, pieces) {
  for (let i = 0, len = pieces.length; i < len; i++) {
    if ((`${arr.toString()},`).indexOf(`${pieces[i].toString()},`) === -1) {
      return false;
    }
  }
  return true;
}

// let bo = canFromArray([91, 4, 64, 78], [[78], [4, 64], [91]]);
// let bo = canFromArray([49,18,16], [[16,18,49]]);
// let bo = canFromArray([15, 88], [[88], [15]]);
const bo = canFromArray([12], [[1]]);

console.log(bo);
