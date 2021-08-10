/**
 * 买卖股票的最佳时机
 * 1. 贪心
 * 2. 动态规划
 * @param {number[]} prices
 * @return {number}
 */

// 贪心：只看当前最好选择
// 只要后一天比前一天高，就卖出
var maxProfit = function (prices) {
  let sum = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < prices[i + 1]) {
      sum += prices[i + 1] - prices[i];
    }
  }
  return sum;
};

const x = maxProfit([7, 6, 4, 3, 1]);
console.log(x);

// 可以买卖无数次，无交易费
// 输入: prices = [7,1,5,3,6,4]
// 输出: 7

// 输入: prices = [1,2,3,4,5]
// 输出: 4

// 输入: prices = [7,6,4,3,1]
// 输出: 0
