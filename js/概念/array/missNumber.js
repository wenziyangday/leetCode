/**
 * 连续数组中缺失的值
 * @param {number[]} nums
 * @return {number}
 */
let missingNumber = function (nums) {
    // 定长数组 n-1,
    // 有序数组：递增数组
    // 所有数组的数字都是唯一的
    // 结果要求：有且只有一个数字不存在于该数组
    let len = nums.length;
    if (len - 1 === nums[len - 1]) {
        return len;
    }
    let find = nums.find((value, index) => value !== index);
    return nums.indexOf(find);
}

console.log(missingNumber([]));