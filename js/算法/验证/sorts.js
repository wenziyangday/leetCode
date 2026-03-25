function bubbleSort(arr) {
  let len = arr.length - 1;
  for (let i = 0; i < len; i++) {
    for (let j = len; j > i; j--) {
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
      }
    }
  }
  return arr;
}

const arr = [10, 100, 20, 2, 90];
const aa = bubbleSort(arr);
console.log(aa);
