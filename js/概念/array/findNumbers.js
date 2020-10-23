/**
 * 从数组nums中计算得到 元素位数 为偶数 的 个数
 * 偶数 能够被2整除的数
 * @param {number[]} nums
 * @return {number}
 */
const findNumbers = function (nums) {
        return nums.filter(value => (value + '').length % 2 === 0).length;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));