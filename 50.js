/**
 * 求x的n次方
 * @param {*} x
 * @param {*} n
 * @returns
 * 1.暴力求解 O(n)
 * 2.递归分治 O(logN)
 * 3.迭代
 * 4.位运算
 */

function cal(x, n) {
  if (n === 0) return 1;
  let y = cal(x, Math.floor(n / 2));
  return n % 2 ? y * y * x : y * y;
}
function pow(x, n) {
  return n >= 0 ? cal(x, n) : 1 / cal(x, -n);
}

// 改写成循环
function pow2(x, n) {
  let res = 1;
  for (let i = n; i !== 0; i = Math.floor(i / 2)) {
    if (n % 2) {
    }
    res = res * x;
  }
  return n > 0 ? res : 1 / res;
}

let x = pow(2, 3);
console.log("x", x);
