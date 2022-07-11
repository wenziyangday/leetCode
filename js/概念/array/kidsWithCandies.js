/**
 * 如何成为最多糖果的孩子？
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
const kidsWithCandies = function(candies, extraCandies) {
    let max = Math.max(...candies);

    return Array.from(candies, val => val + extraCandies >= max);

};


console.log(kidsWithCandies([12,1,12], 10));