/**
 * 三数之和
 * 1. set，map （时间O(N2), 空间 O(N)）
 * 2. 双指针 （时间O(N2)）
 * @param {number[]} nums
 * @return {number[][]}
 */

// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]

var threeSum = function (nums) {
  const res = [];
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      const m = -nums[i] - nums[j];
      const idx = nums.indexOf(m);
      if (idx > j) {
        res.push([nums[i], nums[j], m]);
      }
    }
  }
  return res;
};

var threeSum2 = function (nums) {
  if (nums.length < 3) return [];
  const res = [];
  let len = nums.length;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < len - 2; i++) {
    if (nums[i] > 0) break;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let l = i + 1;
    let r = len - 1;
    while (l < r) {
      const sum = nums[i] + nums[l] + nums[r];
      if (sum > 0) {
        r--;
      } else if (sum < 0) {
        l++;
      } else {
        res.push([nums[i], nums[l], nums[r]]);
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        // push之后需移动指针,防止死循环
        l++;
        r--;
      }
    }
  }
  return res;
};

const nums = [-1, 0, 1, 2, -1, -4];
console.log(threeSum2(nums));
