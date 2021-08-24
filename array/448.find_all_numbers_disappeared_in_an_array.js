/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  const isAppeare = {};
  const result = [];

  for (let i = 0; i < nums.length; i++) {
    if (isAppeare[i + 1] === undefined) {
      isAppeare[i + 1] = false;
    }
    isAppeare[nums[i]] = true;
  }

  for (let key of Object.keys(isAppeare).sort()) {
    if (!isAppeare[key]) {
      result.push(key);
    }
  }

  return result;
};

console.log(findDisappearedNumbers([1, 1, 1]));
