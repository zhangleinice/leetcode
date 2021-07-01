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

let nums = insertSort([3, 4, 1, 2]);
console.log("nums", nums);
