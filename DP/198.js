/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const length = nums.length;
  if (length <= 2) return Math.max(...nums);

  const dp = [nums[0], Math.max(nums[0], nums[1])];

  for (let i = 2; i < nums.length; i++) {
    dp.push(Math.max(dp[i - 1], nums[i] + dp[i - 2]));
  }

  return dp[length];
};

console.log(rob([2, 7, 9, 3, 1]));
console.log(rob([1, 2, 3, 1]));
console.log(rob([1, 3, 1, 3, 100]));
