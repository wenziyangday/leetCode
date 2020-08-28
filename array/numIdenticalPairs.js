/**
 * 好数对
 * 一个数组中 num[i] === num[j] 并且 i < j
 * 得到好数对的个数
 * @param {number[]} nums
 * @return {number}
 */
const numIdenticalPairs = function (nums) {
    let sum = 0;
    for (let i = 0, len = nums.length; i < len; i += 1) {
        for (let j = i + 1; j < len; j++) {
            if (nums[i] === nums[j]) {
                sum += 1;
            }
        }
    }
    return sum;
};

console.log(numIdenticalPairs([1,2,3,1,1,3]));