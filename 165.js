/**
 * 比较版本号
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
//  输入：version1 = "1.01", version2 = "1.001"
//  输出：0
//  解释：忽略前导零，"01" 和 "001" 都表示相同的整数 "1"

// 空间复杂度 O(N + M),使用了两个数组存储两个字符串
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

// 双指针降低时间，空间复杂度
var compareVersion2 = function (version1, version2) {
  let p1 = 0,
    p2 = 0;
  function getChunkIndex(str, index) {
    while (str[index] !== "." && index < str.length) {
      index++;
    }
    return index;
  }
  while (p1 < version1.length && p2 < version2.length) {
    const end1 = getChunkIndex(version1, p1);
    const end2 = getChunkIndex(version2, p2);
    const next1 = +version1.slice(p1, end1);
    const next2 = +version2.slice(p2, end2);
    if (next1 > next2) {
      return 1;
    } else if (next1 < next2) {
      return -1;
    }
    p1 = end1 + 1;
    p2 = end2 + 1;
  }
  // version1字符更长时
  while (p1 < version1.length) {
    const end1 = getChunkIndex(version1, p1);
    const next1 = +version1.slice(p1, end1);
    if (next1 > 0) {
      return 1;
    } else if (next1 < 0) {
      return -1;
    }
    p1 = end1 + 1;
  }
  while (p2 < version2.length) {
    const end2 = getChunkIndex(version2, p2);
    const next2 = +version2.slice(p2, end2);
    if (0 > next2) {
      return 1;
    } else if (next2 > 0) {
      return -1;
    }
    p2 = end2 + 1;
  }
  return 0;
};

const version1 = "1.0.1",
  version2 = "1";

console.log(compareVersion2(version1, version2));

// 输入：version1 = "1.01", version2 = "1.001"
// 输出：0
// 解释：忽略前导零，"01" 和 "001" 都表示相同的整数 "1"
