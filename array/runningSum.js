/**
 * 给你一个数组 nums 。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。请返回 nums 的动态和。
 * @param {number[]} nums
 * @return {number[]}
 */

/**
 * 给定一个数组，动态返回一个同长数组
 * 数组中每个元素为前面几个数字和
 * eg: [1, 2, 3, 4] => [1, 1+2, 1+2+3, 1+2+3+4]
 * [1, 1, 1, 1, 1] => [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1]
 * */

const runningSum = function (nums) {
    // let newNums = [];
    // for (let i = 0, len = nums.length; i < len; i++) {
    //     const subArr = nums.slice(0, i + 1);
    //     let sum = subArr.reduce((a, b) => a + b);
    //     newNums.push(sum);
    // }

    return Array.from(nums, (x, index) => {
        return nums.slice(0, index + 1).reduce((a, b) => a + b)
    })

};

console.log(runningSum([1, 2, 3, 4, 5]));