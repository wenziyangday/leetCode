/**
 * @description leetCode 922题 按奇偶排序数组 II
 * @param {number[]} A
 * @return {number []}
 * */

//

function sortArrayByParityII(A) {
  const oddArr = A.filter(x => x % 2 !== 0).sort((a, b) => a - b);
  const evenArr = A.filter(x => x % 2 === 0).sort((a, b) => a - b);
  return new Array(A.length).fill(0).map(((x, index) => {
    if (index % 2 === 0) {
      return evenArr.splice(0, 1)[0];
    }
    return oddArr.splice(0, 1)[0];
  }))
}

const a = sortArrayByParityII([4, 2, 5, 7]);
console.log(a);
