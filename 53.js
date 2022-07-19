/**
 * 最大子序和
 * 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray3 = function (nums) {
  const dp = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
  }

  return Math.max(...dp);
};

// 状态转移方程  f(i) = Max( f(i-1) + nums[i], nums[i] )
var maxSubArray2 = function (nums) {
  let subs = [],
    pre = nums[0];
  for (let num of nums) {
    pre = Math.max(pre + num, num);
    subs.push(pre);
  }
  return Math.max(...subs);
};

// 降空间复杂度
var maxSubArray = function (nums) {
  let maxAns = nums[0],
    pre = nums[0];
  for (let num of nums) {
    pre = Math.max(pre + num, num);
    maxAns = Math.max(pre, maxAns);
  }
  return maxAns;
};

const x = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]);
console.log(x);

// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。
