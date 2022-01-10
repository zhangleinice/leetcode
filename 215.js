/**
 * 1. 快排: 时间复杂度高
 * 2. 基于快速排序的选择方法
 *
 * 优化： 不一定要全部排序好再去拿，只针对部分元素进行排序，这样的复杂度显然可以降低的
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

//  快排: 时间复杂度高
//  输入: [3,2,1,5,6,4] 和 k = 2
//  输出: 5
var findKthLargest = function (nums, k) {
  function quickSort(nums) {
    if (nums.length < 2) return nums;
    let left = [],
      right = [],
      povit = nums.shift();
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > povit) {
        left.push(nums[i]);
      } else {
        right.push(nums[i]);
      }
    }
    return [...quickSort(left), povit, ...quickSort(right)];
  }
  const list = quickSort(nums);
  return list[k - 1];
};
// 基于快速排序的选择方法
var findKthLargest2 = function (nums, k) {
  let left = [],
    right = [],
    pivot = nums.shift();
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > pivot) {
      left.push(nums[i]);
    } else {
      right.push(nums[i]);
    }
  }
  pivotIdx = left.length;
  if (pivotIdx === k - 1) {
    console.log("pivot", pivot);
    return pivot;
  } else if (pivotIdx > k - 1) {
    findKthLargest2(left, k);
  } else {
    findKthLargest2(right, k);
  }
};

console.log("x", findKthLargest2([3, 2, 1, 5, 6, 4], 2));
