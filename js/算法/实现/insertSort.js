/**
 * 冒泡排序：每趟排序进行 相邻 的两个元素比较找到最大或者最小的
 * */

function bubbleSorting(arr) {
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr.length - i; i++) {
      // 相邻两个元素
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }

  return arr;
}

console.log('bubbleSorting', bubbleSorting([45, 32, 8, 33, 12, 22, 19, 97, 33, 8]));

/**
 * 选择排序：每趟选定一个数，与其后面的数进行比较
 * */
function selectSorting(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }

  return arr;
}

console.log('selectSorting', selectSorting([45, 32, 8, 33, 12, 22, 19, 97, 33, 8]));

/**
 * 插入排序：每次从未排序的部分中选取一个插入到有序的队列中，在这个过程中，未排序的数组长度减少1，而已排序的数组的数组长度增加1
 * */

function insertSorting(arr) {
  for (let i = 1; i < arr.length; i += 1) {
    for (let j = 0; j < i; j++) {
      if (arr[i] < arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }

  return arr;
}

console.log('insertSorting', insertSorting([45, 32, 8, 33, 12, 22, 19, 97, 33, 8]));

/**
 * 希尔排序：TODO
 * */

function shellSorting(arr) {
  const len = arr.length;
  let gap = 1;
  let tmp;

  while (gap < len / 3) {
    gap = gap * 3 + 1;
  }

  for (gap; gap > 0; gap = Math.floor(gap / 3)) {
    for (let i = gap; i < len; i++) {
      tmp = arr[i];
      let j;
      for (j = i - gap; j >= 0 && arr[j] > tmp; j -= gap) {
        arr[j + gap] = arr[j];
      }
      arr[j + gap] = tmp;
    }
  }

  return arr;
}

console.log('shellSorting', shellSorting([45, 32, 8, 33, 12, 22, 19, 97, 33, 8]));






