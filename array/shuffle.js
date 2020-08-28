/**
 * 给定一个双数数组重新排序（数组的双插）
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
const shuffle = function (nums, n) {
    const preArr = nums.slice(0, n);
    const endArr = nums.slice(n);
    const backArr = [];
    preArr.forEach((x, index) => {
        backArr.push(...[x, endArr[index]]);
    })

    return backArr;
};

shuffle([2, 5, 1, 3, 4, 7], 3);