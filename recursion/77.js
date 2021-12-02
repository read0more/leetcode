/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    const result = [];
    const array = Array.from({ length: n }, (_, i) => i + 1);

    run(0, []);

    function run(pos, currArr) {
        if (array.length < pos) return;
        if (currArr.length === k) {
            result.push(currArr);
            return;
        }

        for (let i = pos; i < array.length; i++) {
            run(i + 1, [...currArr, array[i]]);
        }
    }

    return result;
};

// combine(4, 2);
combine(1, 1);