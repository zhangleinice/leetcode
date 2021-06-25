/**
 * 求x的n次方
 * @param {*} x
 * @param {*} n
 * @returns
 * 1.暴力求解 O(n)
 * 2.递归分治 O(logN)
 * 3.快速幂
 */

// 1.递归暴力求解, O(n),可能会栈溢出
function pow1(x, n) {
  if (n === 0) return 1;
  return n > 0 ? pow1(x, n - 1) * x : (1 / x) * pow1(x, n + 1);
}

function cal(x, n) {
  if (n === 0) return 1;
  let y = cal(x, Math.floor(n / 2));
  return n % 2 ? y * y * x : y * y;
}
// 2.递归分治 O(logN)
function pow(x, n) {
  return n >= 0 ? cal(x, n) : 1 / cal(x, -n);
}

/**
 * 快速幂 (O(logn))
 * x^n = (x^2)^n/2 = (x^4)^(n/4)
 * @param {*} x
 * @param {*} n
 * @returns
 */
function pow3(x, n) {
  return n > 0 ? quickMi(x, n) : 1 / quickMi(x, -n);
}
function quickMi(x, n) {
  if (n === 0) return 1;
  let res = 1;
  while (n > 0) {
    if (n & 1) {
      res *= x;
    }
    x *= x;
    // n >>= 1;  有点bug
    n /= 2;
  }
  return res;
}

let x = pow3(2.0, -3);
console.log("x", x);
