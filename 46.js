/**
 * 全排列
 * 抽象成一棵树，dfs + 回溯（有序）
 * @param {number[]} nums
 * @return {number[][]}
 */

// 注意 循环里dfs 调用dfs，函数调用栈里面会有多个dfs，执行完最上面一个会接着执行下面的dfs
var permute = function (nums) {
  let res = [];
  let set = new Set();

  function dfs() {
    if (set.size === nums.length) {
      res.push([...set]);
      return;
    }
    for (let val of nums) {
      // 剪枝
      if (set.has(val)) continue;
      set.add(val);
      dfs();
      // 回溯,delete上一层的dfs，紧接着执行下一层的dfs，注意上层的for循环执行第几个数
      set.delete(val);
    }
  }
  dfs();
  return res;
};

var permute2 = function (nums) {
  let res = [];
  let subs = [];
  function dfs() {
    if (subs.length === nums.length) {
      res.push([...subs]);
      return;
    }
    for (let num of nums) {
      // 剪枝
      if (subs.includes(num)) continue;
      subs.push(num);
      dfs(subs);
      subs.pop();
    }
  }

  dfs();
  return res;
};

const x = permute([1, 2, 3]);
console.log("x", x);

// 输入：nums = [1,2,3]
// 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// 输入：nums = [0,1]
// 输出：[[0,1],[1,0]]

// 输入：nums = [1]
// 输出：[[1]]
