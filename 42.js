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
  // 注意边界条件
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

// 降低时间复杂度
var trap1 = function (height) {
  let ans = 0;
  let len = height.length;
  let max_lefts = [];
  let max_rights = [];
  let max_left = 0;
  let max_right = 0;
  for (let i = 0; i < len; i++) {
    if (height[i] > max_left) {
      max_left = height[i];
    }
    max_lefts.push(max_left);
  }
  for (let i = len - 1; i >= 0; i--) {
    if (height[i] > max_right) {
      max_right = height[i];
    }
    max_rights.unshift(max_right);
  }
  for (let i = 0; i < len; i++) {
    ans += Math.min(max_lefts[i], max_rights[i]) - height[i];
  }
  return ans;
};

// 数组的查询修改 O(1)，插入删除O(N)
// 动态规划计算左边和右边最大高度数组
var trap2 = function (height) {
  let ans = 0;
  let len = height.length;
  let max_lefts = new Array(len).fill(0);
  let max_rights = new Array(len).fill(0);
  max_lefts[0] = height[0];
  max_rights[len - 1] = height[len - 1];

  for (let i = 1; i < len; i++) {
    max_lefts[i] = Math.max(height[i], max_lefts[i - 1]);
  }
  for (let i = len - 2; i >= 0; i--) {
    max_rights[i] = Math.max(height[i], max_rights[i + 1]);
  }
  for (let i = 0; i < len; i++) {
    ans += Math.min(max_lefts[i], max_rights[i]) - height[i];
  }
  return ans;
};

// 单调递减栈
var trap3 = function (height) {
  let len = height.length;
  let ans = 0;
  // 存储下标
  let stack = [];
  for (let i = 0; i < len; i++) {
    while (stack.length && height[i] > height[stack[stack.length - 1]]) {
      // top 出栈
      const top = stack.pop();

      if (!stack.length) {
        break;
      }
      // left变为栈顶元素
      const left = stack[stack.length - 1];
      // 计算积水宽度
      const w = i - left - 1;
      // 计算积水高度
      const h = Math.min(height[left], height[i]) - height[top];
      // 计算积水量
      ans += w * h;
    }
    stack.push(i);
  }
  return ans;
};

const height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
console.log(trap3(height));
