// 插入排序（连续表）| 稳定 | O(1) | O(n2)
function insertSorting(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[i]) {
        [arr[j], arr[i]] = [arr[i], arr[j]]
      }
    }
  }
  return arr;
}

console.log('insertSorting', insertSorting([10, 9, 12, 18, 10, 30, 25, 100, 80, 90, 70]));
// 对链表进行插入排序

//shell 排序 | 不稳定 | O(1) | 时间复杂度未知，但是优于直接插入排序
function shellSorting(arr) {
  const len = arr.length;
  for (let i = Math.floor(len / 2); i >= 1; i = Math.floor(i / 2)) {
    for (let j = i; j < len; j++) {
      for (let k = j - i; k >= 0; k -= i) {
        if (arr[j] < arr[k]) {
          [arr[j], arr[k]] = [arr[k], arr[j]];
        }
      }
    }
  }
  return arr;
}

console.log('shellSorting', shellSorting([10, 9, 12, 18, 10, 30, 25, 100, 80, 90, 70]));

// 冒泡排序 | 稳定  | O(1) | O(n2)
function bubbleSorting(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log('bubbleSorting', bubbleSorting([10, 9, 12, 18, 10, 30, 25, 100, 80, 90, 70]));

// 快速排序：
function quickSorting(arr, low, high) {
  let pivotIndex;
  let len = arr.length;
  low = typeof low != "number" ? 0 : low;
  high = typeof high != "number" ? len - 1 : high;

  if (low < high) {
    pivotIndex = partition(arr, low, high);
    quickSorting(arr, low, pivotIndex - 1);
    quickSorting(arr, pivotIndex + 1, high);
  }
  return arr;
}

function partition(arr, low, high) {
  let pivot = arr[low];

  while (low < high) {
    while (low < high && arr[high] >= pivot) high--;
    arr[low] = arr[high];
    while (low < high && arr[low] < pivot) low++;
    arr[high] = arr[low]
  }
  arr[low] = pivot;

  return low;
}

console.log('quickSorting', quickSorting([10, 9, 12, 18, 10, 30, 25, 100, 80, 90, 70]));


