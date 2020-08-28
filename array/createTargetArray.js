/**
 * 创建一个数组target 根据数组index 中的元素为下标 值为nums 中的元素
 * target 下标 为index[i] target 的值为nums[i] 结束条件为 index 中遍历完毕
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */

/**
 * tips: 关注点数组元素中，存在元素值0，在条件判断中 0 => false
 * */
const createTargetArray = function (nums, index) {
    let target = [];
    let i = 0;
    while (i < index.length) {
        if (target[index[i]] === 0 || target[index[i]]) {
            const preArr = target.slice(0, index[i]);
            const endArr = target.slice(index[i]);
            target = [...preArr, nums[i], ...endArr];
        } else {
            target[index[i]] = nums[i];
        }

        i += 1;
    }

    return target;
};

console.log(createTargetArray([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99]
    , [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]));

console.log(createTargetArray([0, 1, 2, 3, 4]
    , [0, 1, 2, 2, 1]));