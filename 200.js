/**
 * 200. 岛屿数量
 * @param {character[][]} grid
 * @return {number}
 */

// 一定要考虑上下左右四个方向，因为是递归的，如果只是一格的话，可以只考虑右下方向，因为从左上开始循环过来的
var numIslands = function (grid) {
  if (!grid || !grid.length) return 0;

  let rows = grid.length;

  let cols = grid[0].length;

  let counts = 0;

  const dfs = (i, j) => {
    // 边界判断
    if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === "0") return;

    // 把"1"标记为"0"
    grid[i][j] = "0";

    // 四个方向遍历
    dfs(i, j + 1);
    dfs(i, j - 1);
    dfs(i + 1, j);
    dfs(i - 1, j);
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // 遇到"1",dfs遍历上下左右，递归把周围的"1"标记为"0"
      if (grid[i][j] === "1") {
        counts++;
        dfs(i, j);
      }
    }
  }

  return counts;
};

var numIslands = function (grid) {
  if (!grid || !grid.length) return 0;

  let rows = grid.length;

  let cols = grid[0].length;

  let counts = 0;

  const bfs = (i, j) => {
    const queue = [[i, j]];

    grid[i][j] = "0";

    const directions = [
      [0, 1],
      [0, -1],
      [1, 0],
      [-1, 0],
    ];

    while (queue.length) {
      const [x, y] = queue.shift();

      for (let [dx, dy] of directions) {
        const nx = x + dx;
        const ny = y + dy;

        if (
          nx >= 0 &&
          nx < rows &&
          ny >= 0 &&
          ny < cols &&
          grid[nx][ny] === "1"
        ) {
          queue.push([nx, ny]);
          grid[nx][ny] = "0";
        }
      }
    }
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      // 遇到"1",dfs遍历上下左右，递归把周围的"1"标记为"0"
      if (grid[i][j] === "1") {
        counts++;
        bfs(i, j);
      }
    }
  }

  return counts;
};
