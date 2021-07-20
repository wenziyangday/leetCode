const arr = [10, 20, 8, 9, 7, 13, 16, 11, 0]

const shellSorting = function (arr) {
  let len = arr.length,
    temp,
    gap = 1;

  while (gap < len / 3) {
    gap = gap * 3 + 1;
  }

  for (gap; gap > 0; gap = Math.floor(gap / 3)) {
    for (let i = gap; i < len; i++) {
      temp = arr[gap]
      for (let j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j];
      }
    }
  }
  return arr;
}

shellSorting(arr);
