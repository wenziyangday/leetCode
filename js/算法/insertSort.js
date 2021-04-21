/**
 * @function 插入排序
 * @description 对无序数组进行插入排序
 * @param arr {Array} 待排序数组
 * @return sortedArr {Array} 已排序数组
 * @desc 注意 有点类似打牌：从一堆无序的元素中抽取一个元素，插入到有序从右到左进行比较（两两比较）然后进行插入
 * 特点：将数组中的第一个元素作为比较元素（i 从 第一个元素开始）然后进行
 * */

function insertSort(arr) {
  let i = 1;
  const len = arr.length;

  // 趟
  while (i < len) {
    // 前面有序
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j + 1]) {
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
      }
    }
    i += 1;
  }
  return arr;
}
console.log(insertSort([5, 8, 6, 3, 9, 2, 1, 7]));

