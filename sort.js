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

let nums = bubbleSort([3, 4, 1, 2]);
console.log("nums", nums);

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
