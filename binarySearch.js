var binarySearch = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  while (start <= end) {
    // 优化
    let mid = start + ((end - start) >> 1);
    if (nums[mid] > target) {
      start = mid - 1;
    } else if (nums[mid] < target) {
      end = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};

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

/**
 * 求一个数的平方根
 * 1. 二分法
 * 2. 牛顿迭代法
 * @param {number} x
 * @return {number}
 */
// 整数
var mySqrt = function (x) {
  if (x === 0 || x === 1) return x;
  let [left, right] = [1, x];
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (mid * mid === x) {
      return mid;
    } else if (mid * mid > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return Math.floor(right);
};
