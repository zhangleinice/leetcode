/**
 * 0-1背包问题
 * 1.回溯
 * 2.动态规划
 */

// i  第几个物品
// cw 当前背包重量
// items 物品重量
// w 背包承受的最大重量

// 递归 + 缓存
let maxW = 0;
function f(i, cw, items, w) {
  if (cw === w || i === items.length) {
    if (maxW < cw) maxW = cw;
    return;
  }
  // 不装入背包，cw不变
  f(i + 1, cw, items, w);
  if (cw < w) {
    //  第i个装入背包
    f(i + 1, cw + items[i], items, w);
  }
}

const x = f(0, 0, [2, 2, , 6, 4, 3], 9);
console.log("x", x);
// W：9
// N: 2,2,2
