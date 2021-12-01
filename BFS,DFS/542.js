/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (mat) {
  const candidates = [];
  dfs(0, 0);
  function dfs(r, c, length = 0, visited = {}) {
    if (!mat[r] || mat[r][c] === undefined || visited[`${r}${c}`]) return;
    if (mat[r][c] === 0) {
      candidates.push(length);
      return;
    }

    visited[`${r}${c}`] = true;

    dfs(r - 1, c, ++length, visited);
    dfs(r, c + 1, ++length, visited);
    dfs(r + 1, c, ++length, visited);
    dfs(r, c - 1, ++length, visited);
  }
  b = 1;
};

updateMatrix([
  [1, 1, 1],
  [1, 1, 0],
  [1, 0, 0],
]);
