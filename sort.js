/**
 * 冒泡排序
 * 原理：相邻元素交换位置，找到最大(小)放到最后
 * 优化：当已经排好序之后，则不再需要再交换，break
 * @param {*} arr
 */
function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    // 当没有数据交换时，则已经完全有序，不需要再交换
    let flag = false;
    for (let j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let t = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = t;
        flag = true;
      }
    }
    // 如果不交换元素，说明已经排序完成，可以跳出循环了
    if (!flag) break;
  }
  return arr;
}

/**
 * 插入排序
 * 原理： 无序区间像有序区间插入，插入时挨个比较，只移动不用挨个交换
 * @param {*} arr
 */
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let value = arr[i];
    let j = i - 1;
    for (; j >= 0; j--) {
      if (arr[j] > value) {
        // 注意只是移动，没有交换
        arr[j + 1] = arr[j];
      } else {
        break;
      }
    }
    arr[j + 1] = value;
  }
  return arr;
}

/**
 * 归并排序 nlogN，空间复杂度 O(n)
 * 原理：递归分治成单个数的数组，再进行两个有序数组的合并
 * @param {*} arr
 * @returns
 */

// 1. 递归拆分成单个值的数组 logN
function mergeSort(arr) {
  // 直到分割成单个值的数组，终止
  if (arr.length < 2) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);
  return merge(mergeSort(left), mergeSort(right));
}
// 2. 合并两个有序数组
function merge(left, right) {
  let result = [];
  // left 和 right 都不为空时
  while (left.length && right.length) {
    // 保证稳定排序
    if (left[0] > right[0]) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }
  // left 和 right 有一个为空时
  while (left.length > 0) result.push(left.shift());
  while (right.length > 0) result.push(right.shift());
  return result;
}

/**
 * 快排  nlogN,
 * @param {*} arr
 */
function quickSort(arr) {
  if (arr.length < 2) return arr;
  const pivot = arr.shift();
  const left = [];
  const right = [];
  let i = 0;
  for (; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)];
}

let nums = quickSort([3, 4, 1, 2]);
console.log("nums", nums);
