var binarySearch = function (nums, target) {
  let [start, end] = [0, nums.length - 1];
  while (start <= end) {
    let mid = start + ((end - start) >> 1);
    if (target === nums[mid]) return mid;
    if (target > nums[mid]) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return -1;
};

let a = [1, 2, 3, 4, 4, 4, 5, 6, 7];
// 查找第一个等于target的数
function getFirstTarget(nums, target) {}

console.log(binarySearch([1, 2, 4, 5, 7], 7));
