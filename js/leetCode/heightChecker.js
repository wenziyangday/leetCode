/**
 * @description LeetCode 1051题 高度检查器
 * @param {number[]} heights
 * @return {number}
 * */

// 非递减的 顺序排列数组 统计其中 要最小移动的元素的个数
// sort 排序
// 原地算法：不依靠额外资源或者依赖少数的额外资源，仅依靠输出来覆盖输入的一种算法 (改变不需要保存的 原始值 从而生成一个新的值)

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
const height = heightChecker([1, 2, 3, 4, 5]);
console.log(height);
