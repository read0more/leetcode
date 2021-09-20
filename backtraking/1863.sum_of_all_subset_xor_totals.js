/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
  let result = 0;

  /**
   *
   * @param {number} currIndex
   * @param {numbser[]} currSubset
   * @returns
   */
  const dfs = (currIndex, currSubset) => {
    if (currIndex === nums.length) return;

    currSubset = Array.from(currSubset);
    for (let i = currIndex; i < nums.length; i++) {
      currSubset.push(nums[i]);
      result += currSubset.reduce((acc, curr) => acc ^ curr, 0);
      dfs(i + 1, currSubset);
      currSubset.pop();
    }
  };

  dfs(0, []);

  return result;
};

console.log(subsetXORSum([1, 3]));
console.log(subsetXORSum([5, 1, 6]));
console.log(subsetXORSum([3, 4, 5, 6, 7, 8]));
