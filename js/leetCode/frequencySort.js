/**
 * @description leetCode 1636题 按照频率将数组升序排序
 * @param {number[]} nums
 * @return {number[][]}
 * */

// TODO sort 何时是升序，何时是降序

function frequencySort(nums) {
    const setNums = [...new Set(nums)];
    const sortArr = setNums.map(x => nums.filter(y => x === y)).sort((a, b) => {
        if (a.length === b.length) {
            return -(a[0] - b[0]);
        }
        return a.length - b.length;
    });
    return sortArr.flat();
}

// const bool = frequencySort([1, 1, 2, 2, 2, 3]);
const bool = frequencySort([2, 3, 1, 3, 2]);
// const bool = frequencySort([-1, 1, -6, 4, 5, -6, 1, 4, 1]);
// const bool = frequencySort([1, 5, 0, 5]);
console.log(bool);


