/**
 * 接雨水
 * 1. 常规思想
 * 2. 动态规划
 * 3. 双指针
 * 4. 单调栈
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let ans = 0;
  let len = height.length;

  for (let i = 1; i < len - 1; i++) {
    let max_left = 0;
    let max_right = 0;
    // 左边最大值
    for (let j = i; j >= 0; j--) {
      max_left = Math.max(height[j], max_left);
    }
    // 右边最大值
    for (let k = i; k < len; k++) {
      max_right = Math.max(height[k], max_right);
    }
    ans += Math.min(max_right, max_left) - height[i];
  }
  return ans;
};

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap(height));
