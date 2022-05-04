// 34. Find First and Last Position of Element in Sorted Array

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let low = 0;
    let high = nums.length;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const current = nums[mid];
        if (current === target) {
            let start = mid + 1;
            let end = mid - 1;

            for (let i = mid; 0 <= i; i--) {
                if (nums[i] === target) {
                    start--;
                } else {
                    break;
                }
            }

            for (let i = mid; i < nums.length; i++) {
                if (nums[i] === target) {
                    end++;
                } else {
                    break;
                }
            }
            return [start, end];
        } else if (current < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return [-1, -1];
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));
console.log(searchRange([5, 7, 7, 8, 8, 10], 6));
console.log(searchRange([], 0));
console.log(searchRange([2], 2));
console.log(searchRange([2, 2], 2));
console.log(searchRange([1, 3], 1));


// searchRange2보다 searchRange가 정말 약간 빠르긴 하다.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange2 = function (nums, target) {
    function find(nums, target, low = 0, high = nums.length) {
        while (low <= high) {
            const mid = low + high >> 1;
            const current = nums[mid];
            if (current < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return low;
    }

    const low = find(nums, target);
    if (nums[low] !== target) return [-1, -1];
    return [low, find(nums, target + 1, low) - 1];
}


// console.log(searchRange2([5, 7, 7, 8, 8, 10], 8));
// console.log(searchRange2([5, 7, 7, 8, 8, 10], 6));
// console.log(searchRange2([], 0));
// console.log(searchRange2([2], 2));
// console.log(searchRange2([2, 2], 2));
console.log(searchRange2([1, 2, 5, 7, 8], 5));