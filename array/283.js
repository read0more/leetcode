/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let cnt = 0;

  for (const num of nums) {
    nums[cnt] = num;
    if (num !== 0) {
      cnt++;
    }
  }

  for (let i = cnt; i < nums.length; i++) {
    nums[i] = 0;
  }
};

moveZeroes([0, 0, 1]);
moveZeroes([0, 1, 0, 3, 12]);
