/**
 * 矩阵的bfs遍历
 * @param {*} matrix
 * @param {*} start
 */
function bfsMatrix(matrix, start) {
  const m = matrix.length;
  const n = matrix[0].length;

  const directions = [
    [0, 1],
    [0, -1],
    [-1, 0],
    [1, 0],
  ];

  const visited = new Array(m).fill(false).map((x) => new Array(n).fill(false));
  const result = [];

  // 初始化queue
  const queue = [start];
  const [startX, startY] = start;
  visited[startX][startY] = true;

  while (queue.length) {
    // 取出并存储第一个节点
    const [x, y] = queue.shift();
    result.push([x, y]);

    // 遍历
    for (let [dx, dy] of directions) {
      const nx = x + dx;
      const ny = y + dy;

      // 判断是否访问过
      if (nx > 0 && nx <= m && ny > 0 && ny <= n && !visited[nx][ny]) {
        visited[nx][ny] = true;
        queue.push([nx, ny]);
      }
    }
  }

  return result;
}

function robots_navigation(grid, k) {
  const m = grid.length;
  const n = grid[0].length;

  const directions = [
    [0, 1],
    [0, -1],
    [1, 0],
    [-1, 0],
  ];

  //  访问记录， 三维矩阵，[x,y,z]，z表示访问次数
  const visited = new Array(m)
    .fill(false)
    .map((x) =>
      new Array(n).fill(false).map((k) => new Array(k + 1).fill(false))
    );

  const queue = [0, 0, 0];
  visited[0][0][0] = true;

  while (queue.length) {
    const [x, y, z] = queue.shift();

    // 到右下角
    if (x === m - 1 && y === n - 1) {
      return true;
    }

    for (const [dx, dy] of directions) {
      const nx = x + nx;
      const ny = y + ny;

      if (nx >= 0 && nx < m && ny >= 0 && ny < n) {
        const nz = z + grid[nx][ny];

        if (nz <= k && !visited[nx][ny][nz]) {
          visited[nx][ny][nz] = true;
          queue.push([nx][ny][nz]);
        }
      }
    }
  }
  return false;
}
