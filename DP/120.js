/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  const height = triangle.length;
  if (height === 1) return triangle[0][0];
  const dp = [];
  dp.push(triangle[0]);

  for (let i = 1; i < triangle.length; i++) {
    const nextDp = [];
    const prevWidth = triangle[i - 1].length;
    for (let j = 0; j < triangle[i].length; j++) {
      const candidate1 = -1 < j - 1 ? dp[i - 1][j - 1] : Infinity;
      const candidate2 = j < prevWidth ? dp[i - 1][j] : Infinity;
      nextDp.push(
        Math.min(candidate1 + triangle[i][j], candidate2 + triangle[i][j])
      );
    }
    dp.push(nextDp);
  }

  return Math.min(...dp[height - 1]);
};

console.log(minimumTotal([[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]));
