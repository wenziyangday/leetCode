/**
 * @description leetCode 1122题 数组的相对排序
 * @param {number []} arr1
 * @param {number []} arr2
 * @return {number []}
 * */

// 相对顺序：arr1 存在arr2 中的 元素 按照 arr2 的 元素进行排序
// 未存在arr2 的 元素则升序存于末尾

function relativeSortArray(arr1, arr2) {
  const sortDiff = arr1.filter(x => arr2.indexOf(x) === -1).sort((a, b) => a - b);

  return arr2.map((x2) => {
    return arr1.filter(x1 => x1 === x2);
  }).flat().concat(sortDiff);
}


const decrypts = relativeSortArray([2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19], [2, 1, 4, 3, 9, 6]);
console.log(decrypts);
