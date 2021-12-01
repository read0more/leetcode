/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
  let result = 0;
  for (let row = 0; row < grid.length; row++) {
    for (let column = 0; column < grid[row].length; column++) {
      if (grid[row][column]) {
        dfs(row, column);
      }
    }
  }

  function dfs(row, column, temp = { count: 0 }) {
    if (!grid[row] || !grid[row][column]) return;

    temp.count += grid[row][column];
    result = Math.max(result, temp.count);

    grid[row][column] = 0;
    dfs(row + 1, column, temp);
    dfs(row, column + 1, temp);
    dfs(row - 1, column, temp);
    dfs(row, column - 1, temp);
  }

  return result;
};

maxAreaOfIsland([
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
]);
