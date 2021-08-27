/**
 * 比较版本号
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

// 注意考虑周全，细节；没啥难度
var compareVersion = function (version1, version2) {
  const v1 = version1.split(".");
  const v2 = version2.split(".");
  // 注意循环次数为长的数组
  const n = Math.max(version1.length, version2.length);
  for (let i = 0; i < n; i++) {
    // 去掉前导零
    const x = v1[i] === undefined ? 0 : parseInt(v1[i]);
    const y = v2[i] === undefined ? 0 : parseInt(v2[i]);
    if (x > y) {
      return 1;
    } else if (x < y) {
      return -1;
    }
  }
  return 0;
};

const version1 = "1.0.1",
  version2 = "1";

console.log(compareVersion(version1, version2));

// 输入：version1 = "1.01", version2 = "1.001"
// 输出：0
// 解释：忽略前导零，"01" 和 "001" 都表示相同的整数 "1"
