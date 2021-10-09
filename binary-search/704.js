/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let min = 0;
  let max = nums.length - 1;

  while (min <= max) {
    let mid = Math.floor((min + max) / 2);

    if (nums[mid] === target) return mid;
    else if (target < nums[mid]) max--;
    else min++;
  }

  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 2));
console.log(search([-1, 0, 3, 5, 9, 12], 9));
console.log(search([5], 5));
