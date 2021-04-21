/**
 * @function 选择排序
 * @description 对未排序的数组进行选择排序
 * @param arr {Array} 未排序的数组
 * @return {Array} 已排序数组
 * */

function selectSort(arr) {
  let i = 0;
  const len = arr.length;

  // 趟
  while (i < len) {

    // 找到一个
    for (let j = i; j < len; j++) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    i += 1;
  }

  return arr;
}


console.log(selectSort([5, 8, 6, 3, 9, 2, 1, 7]));
