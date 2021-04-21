/**
 * @function 冒泡排序
 * @description 对数组进行冒泡排序
 * @param arr {Array} 要排序数组
 * @return sortedArr {Array} 已排序数组
 * @desc  注意每一趟 进行 相邻两个元素进行比较 然后进行冒泡
 * */

function bubbleSort(arr) {

  const len = arr.length;
  let i = 0;

  // for (let j = 0; j < len - 1; j++) {
  //   for (let k = 0; k < len - 1 - j; k++) {
  //     if (arr[k] < arr[k + 1]) {
  //       [arr[k], arr[k + 1]] = [arr[k + 1], arr[k]];
  //     }
  //   }
  // }

  // 趟 为什么减1？2个数字比较 只要一趟， 3个数字比较只要两趟
  while (i < len - 1) {

    // 相邻
    for (let k = 0; k < len - 1 - i; k++) {
      if (arr[k] < arr[k + 1]) {
        [arr[k], arr[k + 1]] = [arr[k + 1], arr[k]];
      }
    }
    i += 1;
  }

  return arr;
}

// 从大到小
console.log(bubbleSort([5, 8, 6, 3, 9, 2, 1, 7]));

