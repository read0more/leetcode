/**
 * @param {number[][]} grid
 * @return {number}
 */
// 내가 작성한 틀린답
// var maxAreaOfIsland = function (grid) {
//   const visited = {};
//   const sizesOfIsland = [];
//   const MAX_OF_ROW = grid.length;
//   const MAX_OF_COLUMN = grid[0].length;

//   for (let row = 0; row < grid.length; row++) {
//     for (let column = 0; column < grid[row].length; column++) {
//       if (!visited[`${row}${column}`] && grid[row][column] === 1) {
//         visited[`${row}${column}`] = true;
//         sizesOfIsland.push(dfs(row, column));
//       }
//     }
//   }

//   function dfs(row, column) {
//     const upRow = row - 1;
//     const downRow = row + 1;
//     const rightColumn = column + 1;
//     const leftColumn = column - 1;
//     let size = 1;

//     if (
//       !visited[`${upRow}${column}`] &&
//       0 <= upRow &&
//       grid[upRow][column] === 1
//     ) {
//       visited[`${upRow}${column}`] = true;
//       size += dfs(upRow, column);
//     }

//     if (
//       !visited[`${row}${rightColumn}`] &&
//       rightColumn < MAX_OF_COLUMN &&
//       grid[row][rightColumn] === 1
//     ) {
//       visited[`${row}${rightColumn}`] = true;
//       size += dfs(row, rightColumn);
//     }

//     if (
//       !visited[`${downRow}${column}`] &&
//       downRow < MAX_OF_ROW &&
//       grid[downRow][column] === 1
//     ) {
//       visited[`${downRow}${column}`] = true;
//       size += dfs(downRow, column);
//     }

//     if (
//       !visited[`${row}${leftColumn}`] &&
//       0 <= leftColumn &&
//       grid[row][leftColumn] === 1
//     ) {
//       visited[`${row}${leftColumn}`] = true;
//       size += dfs(row, leftColumn);
//     }

//     return size;
//   }

//   return sizesOfIsland.length ? Math.max(...sizesOfIsland) : 0;
// };

const maxAreaOfIsland = (grid) => {
  const res = { count: 0 };
  for (let r = 0; r < grid.length; r++) {
    for (let c = 0; c < grid[0].length; c++) {
      dfs(grid, r, c, res);
    }
  }
  return res.count;
};

const dfs = (grid, r, c, res, area = { count: 0 }) => {
  if (!grid[r] || !grid[r][c]) return;
  res.count = Math.max(res.count, (area.count += grid[r][c]));
  grid[r][c] = 0;
  dfs(grid, r, c - 1, res, area);
  dfs(grid, r, c + 1, res, area);
  dfs(grid, r - 1, c, res, area);
  dfs(grid, r + 1, c, res, area);
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
