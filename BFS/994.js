/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let result = 0;
    const dirs = [[-1, 0], [0,1], [1, 0], [0, -1]];
    const queue = [];

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            if (grid[r][c] === 2) {
                queue.push([r, c, 0]);
            }            
        }
    };

    while (queue.length) {
        const [r,c,m] = queue.shift();

        result = Math.max(result, m);

        for (const dir of dirs) {
            const [moveR, moveC] = dir;
            const nextR = r + moveR;
            const nextC = c + moveC;
            const next = [nextR, nextC, m + 1];

            if (!grid[nextR] || !grid[nextR][nextC]) continue;

            if (grid[nextR][nextC] === 1) {
                queue.push(next);
                grid[nextR][nextC] = 2;
            }
        }
    }

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            if (grid[r][c] === 1) {
                return -1;
            }            
        }
    };

    return result;
}

console.log(orangesRotting([[2, 1, 1], [1, 1, 0], [0, 1, 1]])); // 4
console.log(orangesRotting([[2,1,1],[0,1,1],[1,0,1]])); // -1
console.log(orangesRotting([[0,2]])); // 0