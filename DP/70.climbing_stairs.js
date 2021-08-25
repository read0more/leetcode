/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const dp = new Array(n + 1).fill(-1);
  dp[1] = 1;
  dp[2] = 2;
  dp[3] = 3;

  for (let i = 4; i <= n; i++) {
    dp[i] = dp[i - 2] + dp[i - 1];
  }

  return dp[n];
};

console.log(climbStairs(4));
console.log(climbStairs(5));
