/**
 * 将一个行程压缩列表解码
 * 行程列表长度为偶数 即行程表 成对出现
 * [freq, val] = [nums[2*i], nums[2*i+1]]
 * eg: [1, 2, 3, 4] => [[1, 2], [3, 4]] => [[2], [4, 4, 4]] 描述为 2 出现一次， 4出现3次
 *
 * @param {number[]} nums
 * @return {number[]}
 */
const decompressRLEList = function (nums) {
    if (nums.length % 2 !== 0) return null;
    let newArr = [];

    nums.map((value, index) => {
        let fillArr = Array.from({length: nums[2 * index]}).fill(nums[2 * index + 1]);
        newArr = [...newArr, ...fillArr];
    });
    return  newArr;
};

decompressRLEList([1, 2, 3, 4]);