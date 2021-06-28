/**
 * 冒泡排序
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
 * @param {*} arr
 */
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let preIndex = i - 1;
    current = arr[i];
    while (arr[preIndex] > current && preIndex >= 0) {
      arr[preIndex + 1] = arr[preIndex];
      console.log("arr", arr);
      preIndex--;
    }
    arr[preIndex + 1] = current;
    console.log("arr1", arr);
  }
  return arr;
}

let nums = insertSort([3, 4, 1, 2]);
// console.log("nums", nums);

function getMax(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      let t = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = t;
    }
  }
  return arr;
}

// 插入排序，a表示数组，n表示数组大小
function insertionSort(arr) {
  if (arr.length <= 1) return;

  for (let i = 1; i < arr.length; ++i) {
    let value = a[i];
    let j = i - 1;
    // 查找插入的位置
    for (; j >= 0; --j) {
      if (a[j] > value) {
        a[j + 1] = a[j]; // 数据移动
      } else {
        break;
      }
    }
    a[j + 1] = value; // 插入数据
  }
}
