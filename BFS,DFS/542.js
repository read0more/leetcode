/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
 var updateMatrix = function(mat) {
     const queue = [];
     const dirs = [[-1, 0], [0,1], [1, 0], [0, -1]];
     for (let r=0;r<mat.length;r++) {
         for (let c=0;c<mat[r].length;c++) {
             if (mat[r][c] === 0) {
                queue.push([r,c,0]);
             } else {
                 mat[r][c] = Infinity;
             }
         }
     }

     while (queue.length) {
        const [r, c, d] = queue.shift();

        if (d < mat[r][c]) {
            mat[r][c] = d;
        }

        
        for (const dir of dirs) {
            const [moveR, moveC] = dir;
            const next = [r + moveR, c + moveC, d + 1];
            
            if (!mat[next[0]] || (mat[next[0]][next[1]] !== Infinity)) continue;

            queue.push(next);
        }
     }

     return mat;
};

console.log(updateMatrix
    ([
        [0,0,0],
        [0,1,0],
        [1,1,1]
    ])
);
// [[0,0,0],[0,1,0],[1,2,1]]