/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let low = 0;
  let high = nums.length - 1;
  let mid = 0;
  let result = -1;

  while (low <= high) {
    mid = Math.floor((low + high) / 2);
    if (nums[mid] === target) {
      result = mid;
      break;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }

    if (high < low) {
      result = low;
    }
  }

  return result;
};

console.log(searchInsert([1, 3, 5, 6], 5));
console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));
console.log(searchInsert([1, 3, 5, 6], 0));
console.log(searchInsert([1], 0));
console.log(searchInsert([1, 3], 2));
