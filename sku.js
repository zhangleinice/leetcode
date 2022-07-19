/**
 * 电商sku全排列
 * dfs里加一个index记录每个属性数组
 */
function combine(...args) {
  let res = [];
  let subs = new Set();

  function dfs(index) {
    let list = args[index];
    if (subs.size === args.length) {
      res.push([...subs]);
      return;
    }
    for (let val of list) {
      // 剪枝
      if (subs.has(val)) continue;
      subs.add(val);
      dfs(index + 1);
      //   回溯
      subs.delete(val);
    }
  }
  dfs(0);
  return res;
}

let names = ["iPhone X", "iPhone XS"];
let colors = ["黑色", "白色"];
let storages = ["64g", "256g"];
// 输出
// [
//         ["iPhone X", "黑色", "64g"],
//         ["iPhone X", "黑色", "256g"],
//         ["iPhone X", "白色", "64g"],
//         ["iPhone X", "白色", "256g"],
//         ["iPhone XS", "黑色", "64g"],
//         ["iPhone XS", "黑色", "256g"],
//         ["iPhone XS", "白色", "64g"],
//         ["iPhone XS", "白色", "256g"]
//   ]
const x = combine1(names, colors, storages);
console.log(x);

function combine1(...args) {
  const res = [];

  const set = new Set();

  function dfs(idx) {
    const list = args[idx];
    if (args.length === set.size) {
      res.push([...set]);
      return;
    }
    for (let i = 0; i < list.length; i++) {
      // 剪枝
      if (set.has(list[i])) continue;
      set.add(list[i]);
      dfs(idx + 1);
      set.delete(list[i]);
    }
  }
  dfs(0);
  return res;
}
