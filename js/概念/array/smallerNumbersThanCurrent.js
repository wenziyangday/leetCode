/**
 * 统计数组中比当前元素小的值
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = function (nums) {
    let summary = [];
    const newNums = nums.slice().sort((a, b) => a - b);

    let i = 0;
    while (i < nums.length) {
        let sum = newNums.indexOf(nums[i]);
        summary.push(sum);
        i += 1;
    }

    return summary;
};

smallerNumbersThanCurrent([8, 1, 2, 2, 3]);