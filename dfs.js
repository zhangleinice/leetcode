// 网格类问题的 DFS 遍历方法

// 1. 第一个要素是访问相邻结点
// 2. 第二个要素是判断边界
// 3. 如何避免重复遍历

// 二叉树
function traverse(root) {
  // 判断是否还有子节点，以及终止递归
  if (root == null) {
    return;
  }
  // 访问两个相邻结点：左子结点、右子结点
  traverse(root.left);
  traverse(root.right);
}

// 图
function dfs(grid, r, c) {
  // 判断 base case
  // 如果坐标 (r, c) 超出了网格范围，直接返回
  if (!inArea(grid, r, c)) {
    return;
  }
  //   如何避免重复遍历
  grid[r][c] = 2; // 将格子标记为「已遍历过」

  // 访问上、下、左、右四个相邻结点
  dfs(grid, r - 1, c);
  dfs(grid, r + 1, c);
  dfs(grid, r, c - 1);
  dfs(grid, r, c + 1);
}

// 判断坐标 (r, c) 是否在网格中
function inArea(grid, r, c) {
  return 0 <= r && r < grid.length && 0 <= c && c < grid[0].length;
}
