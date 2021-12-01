/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const color = image[sr][sc];
  const visited = {};
  const locations = [[sr, sc]];
  const rowLimit = image.length;
  const columnLimit = image[0].length;

  while (locations.length) {
    const [currentRow, currentColumn] = locations.pop();

    check(currentRow, currentColumn);
    check(currentRow - 1, currentColumn);
    check(currentRow, currentColumn + 1);
    check(currentRow + 1, currentColumn);
    check(currentRow, currentColumn - 1);
  }

  a = 1;
  function check(r, c) {
    if (
      r < 0 ||
      rowLimit <= r ||
      c < 0 ||
      columnLimit <= c ||
      visited[`${r}${c}`] ||
      image[r][c] !== color
    ) {
      return;
    }
    image[r][c] = newColor;
    visited[`${r}${c}`] = true;
    locations.push([r, c]);
  }
};

floodFill(
  [
    [0, 0, 0],
    [0, 0, 0],
  ],
  0,
  0,
  2
);

floodFill(
  [
    [0, 0, 0],
    [0, 1, 0],
  ],
  1,
  1,
  2
);
