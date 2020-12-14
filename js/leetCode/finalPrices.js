/**
 * @description leetCode 1475题 商品折扣后的最终折扣
 * @param {number[]} prices
 // * @return {number }
 * */


// i < j && prices[i] >= prices[j] && min index

function finalPrices(prices) {
  return prices.map((price, i) => {
    return (price - (prices.filter((_price, j) => j > i & _price <= price)[0] ?? 0));
  });
}

// const prices = finalPrices([8,4,6,2,3]);
// const prices = finalPrices([1, 2, 3, 4, 5]);
const prices = finalPrices([10, 1, 1, 6]);
console.log(prices);
