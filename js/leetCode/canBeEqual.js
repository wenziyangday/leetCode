/**
 * @description LeetCode 1460题 通过翻转子数组使两个数组相等
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 * */


function canBeEqual(target, arr) {

  if (target.length !== arr.length) {
    return false;
  }

  let sliceTarget = target.slice();
  let filterArr = arr.filter(x => {
    if (!sliceTarget.includes(x)) {
      return x;
    } else {
      sliceTarget.splice(sliceTarget.indexOf(x), 1);
    }
  });


  return filterArr.length === 0;
}


// let bo = canBeEqual([], []);
// let bo = canBeEqual([1,2,3,4], [2,4,1,3]);
let bo = canBeEqual([3, 7, 9], [3, 7, 11]);
console.log(bo);
