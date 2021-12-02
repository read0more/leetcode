/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    const result = [];
    run(nums, []);

    function run(arr, currArr) {
        if (!arr.length) {
            result.push(currArr);
        }

        for (let i = 0; i < arr.length; i++) {
            const newArray = [...arr];
            const newNum = newArray.splice(i, 1);
            run(newArray, [...currArr, ...newNum]);
        }
    }

    return result;
};

permute([1,2,3]);
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]