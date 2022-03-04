/**
 * 两数之和
 * hashMap查询降低时间复杂度：空间换时间
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//  输入：nums = [2,7,11,15], target = 9
//  输出：[0,1]
//  解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1]

var twoSum = function (nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length - 1; i++) {
    const num = target - nums[i];
    if (map.has(num)) {
      return [map.get(num), i];
    } else {
      map.set(nums[i], i);
    }
  }
  return [];
};

const nums = [2, 7, 11, 15];
console.log(twoSum(nums, 9));
