/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];
    if (sum === target) {
      return [++left, ++right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }
};

a = twoSum([2, 7, 11, 15], 9);
console.log(a);
