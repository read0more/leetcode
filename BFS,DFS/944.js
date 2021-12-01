/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const candidates = [];
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === 2) {
        const visited = {};
        dfs(r - 1, c, 1);
        dfs(r, c + 1, 1);
        dfs(r + 1, c, 1);
        dfs(r, c - 1, 1);
      }
    }
  }

  function dfs(r, c, minutes = 0) {
    if (!grid[r] || !grid[r][c] || grid[r][c] === 2) {
      candidates.push(minutes);
      return;
    }

    grid[r][c] = 2;

    dfs(r - 1, c, ++minutes);
    dfs(r, c + 1, ++minutes);
    dfs(r + 1, c, ++minutes);
    dfs(r, c - 1, ++minutes);
  }

  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[r].length; c++) {
      if (grid[r][c] === 1) return -1;
    }
  }

  return Math.max(...candidates);
};

a = orangesRotting([
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1],
]);

console.log(a);
