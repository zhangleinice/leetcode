/**
 *
 * 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
 * 1. map
 * 2. sort
 * 3. 分治
 */

/**
 * 1.map 记录次数
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      map[nums[i]] += 1;
    } else {
      map[nums[i]] = 1;
    }
  }
  for (let key in map) {
    if (map[key] > nums.length / 2) {
      return key;
    }
  }
  return -1;
};

/**
 * 2. sort 去中间值
 * @param {number[]} nums
 * @returns {number}
 */
var majorityElement2 = function (nums) {
  nums.sort();
  return nums[Math.floor(nums.length / 2)];
};

/**
 * 分治
 * @param {*} nums
 */
var majorityElement2 = function (nums) {};

let x = majorityElement2([2, 2, 2, 3, 1, 1, 2]);
console.log("x", x);
