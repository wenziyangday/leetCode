/**
 * @description leetCode 1652题 拆炸弹
 * @param {number []} code
 * @param {number} k
 * @return {number []}
 * */

// 当下标 index + k > code.length
// 子数组

function decrypt(code, k) {
  const len = code.length;
  return code.map((x, index) => {
    if (k === 0) {
      return 0
    }

    if (k > 0) {
      if (index + k < len) {
        return code.slice(index + 1, index + k + 1).reduce((a, b) => a + b);
      } else {
        return [...code.slice(index + 1), ...code.slice(0, index + k - len + 1)].reduce((a, b) => a + b);
      }
    }

    // TODO 规律待查找
    if (k < 0) {
      if (index + k >= 0) {
        return code.slice(index + k - 1, index - 1).reduce((a, b) => a + b);
      } else {
        return 0;
        return [...code.slice(0, index - 1), ...code.slice(index + k + len - 1)].reduce((a, b) => a + b);
      }
    }
  })
}

// const decrypts = decrypt([5, 7, 1, 4], 3);
// const decrypts = decrypt([1, 2, 3, 4], 0);
const decrypts = decrypt([2, 4, 9, 3], -2);
console.log(decrypts);
