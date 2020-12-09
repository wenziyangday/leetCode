/**
 * @description LeetCode 1051题 高度检查器
 * @param {number[]} heights
 * @return {number}
 * */

// 非递减的 顺序排列数组 统计其中 要最小移动的元素的个数
// sort 排序
// TODO 原地算法 比较函数( 之前看过一个比较函数哈希值)

function heightChecker(heights) {
  let oldHeights = heights.slice();
  heights.sort(((a, b) => a - b));
  let count = 0;
  oldHeights.forEach((x, index) => {
    if (x !== heights[index]) {
      count += 1;
    }
  });
  return count;
}


// let height = heightChecker([1, 1, 4, 2, 1, 3]);
// let height = heightChecker([5, 1, 2, 3, 4]);
let height = heightChecker([1, 2, 3, 4, 5]);
console.log(height);
