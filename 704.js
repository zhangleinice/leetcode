/**
 * 二分查找
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var binarySearch = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    // 优化
    let mid = start + ((end - start) >> 1);
    // let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return -1;
};

console.log(binarySearch([1, 2, 4, 5, 7], 7));
