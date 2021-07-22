/**
 * 找出一个旋转数组中的值
 * 二分变体,注意=的临界条件
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 *
 * eg
 * input：nums = [4,5,6,7,0,1,2], target = 0
 * output：4
 */
var search = function (nums, target) {
  let [low, high] = [0, nums.length - 1];
  while (low <= high) {
    let mid = low + ((high - low) >> 1);
    if (nums[mid] === target) return mid;
    // 左侧有序
    if (nums[low] <= nums[mid]) {
      if (nums[mid] > target && nums[low] <= target) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }
    } // 右侧有序
    else {
      if (nums[mid] < target && nums[high] >= target) {
        low = mid + 1;
      } else {
        high = mid - 1;
      }
    }
  }
  return -1;
};

const arr = [4, 5, 6, 7, 0, 1, 2];

console.log(search(arr, 0));
