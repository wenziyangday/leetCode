function search(arr, ele) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = parseInt(`${(start + end) / 2}`);
    if (arr[mid] === ele) {
      return mid;
    } else if (arr[mid] < ele) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
}


class ChainE {
  constructor(ele) {
    this.arr = [...ele];

    return this;
  }
}
