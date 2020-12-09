/**
 * @description LeetCode 1640题 能否连接形成数组
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 * */

// 题解：分析 [1, 2, 3, 4].toString() => 1,2,3,4 但是这个对于[12].toString() => 12 和 [1].toString() => 1
// 由于没有做数组元素隔离，因此会出现 [12].toString().indexOf([1].toString()) !== -1 这种情况
// 再者 只要隔离了元素 就可以了 (arr.toString() + ',').indexOf(pieces[i].toString() + ',')

function canFromArray(arr, pieces) {
  for (let i = 0, len = pieces.length; i < len; i++) {
    if ((arr.toString() + ',').indexOf(pieces[i].toString() + ',') === -1) {
      return false;
    }
  }
  return true;
}

// let bo = canFromArray([91, 4, 64, 78], [[78], [4, 64], [91]]);
// let bo = canFromArray([49,18,16], [[16,18,49]]);
// let bo = canFromArray([15, 88], [[88], [15]]);
let bo = canFromArray([12], [[1]]);

console.log(bo);
