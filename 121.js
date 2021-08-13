/**
 *
 * 只能买卖一次
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let maxProfit = 0;
  for (let i = 0; i < prices.length; i++) {
    for (j = i + 1; j < prices.length; j++) {
      let profit = prices[j] - prices[i];
      if (profit > maxProfit) {
        maxProfit = profit;
      }
    }
  }
  return maxProfit;
};

// 一次遍历，动态规划
var maxProfit2 = function (prices) {
  let minPrice = prices[0],
    maxProfit = 0;
  for (let price of prices) {
    if (minPrice > price) {
      minPrice = price;
    } else if (price - minPrice > maxProfit) {
      maxProfit = price - minPrice;
    }
  }
  return maxProfit;
};

const x = maxProfit2([7, 1, 5, 3, 6, 4]);
console.log("x", x);
// 输入：[7,1,5,3,6,4]
// 输出：5
