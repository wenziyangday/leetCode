/**
 * 生成一个满足 num[i] = start + 2*i 数组 进行元素异或处理
 * 异或运算 1 ^ 4 = 5
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
const xorOperation = function (n, start) {
    // let arr = [];
    // for (let i = 0; i < n; i++) {
    //     arr[i] = start + 2 * i;
    // }
    let arr = Array.apply(null, {length: n}).map((x, index) => start + 2 * index)

    return arr.reduce((a, b) => a ^ b);
};

console.log(xorOperation(5, 0));
console.log(xorOperation(4, 3));