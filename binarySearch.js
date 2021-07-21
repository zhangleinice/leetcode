/**
 * 二分查找变形问题
 * @param {*} nums
 * @param {*} target
 */
// 查找第一个等于target的数
function getFirstTarget(nums, target) {
  let [low, high] = [0, nums.length - 1];
  while (low <= high) {
    let mid = low + ((high - low) >> 1);
    if (nums[mid] > target) {
      high = mid - 1;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      // 如果mid已经是第一个数，则直接返回
      // 如果mid的前一个数不等于target，也直接返回
      if (mid === 0 || nums[mid - 1] !== target) return mid;
      high = mid - 1;
    }
  }
  return -1;
}

// 查找最后一个等于target的数
function getLastTarget(nums, target) {
  let [low, high] = [0, nums.length - 1];
  while (low <= high) {
    let mid = low + ((high - low) >> 1);
    if (nums[mid] > target) {
      high = mid - 1;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      // 如果mid已经是最后一个数，则直接返回
      // 如果mid的后一个数不等于target，也直接返回
      if (nums[mid + 1] !== target || mid === nums.length - 1) return mid;
      low = mid + 1;
    }
  }
  return -1;
}

// 查找第一个大于target的数
function getFirstMoreTarget(nums, target) {
  let [low, high] = [0, nums.length - 1];
  while (low <= high) {
    let mid = low + ((high - low) >> 1);
    if (nums[mid] > target) {
      high = mid - 1;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      if (nums[mid + 1] !== target) return nums[mid + 1];
      low = mid + 1;
    }
  }
  return -1;
}

// 查找最后一个小于等于给定值的元素
function getFirstLessTarget(nums, target) {
  let [low, high] = [0, nums.length - 1];
  while (low <= high) {
    let mid = low + ((high - low) >> 1);
    if (nums[mid] > target) {
      high = mid - 1;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      if (nums[mid - 1] !== target) return nums[mid - 1];
      high = mid - 1;
    }
  }
  return -1;
}

const arr = [1, 3, 4, 5, 6, 8, 8, 8, 8, 18];

console.log(getFirstLessTarget(arr, 18));
