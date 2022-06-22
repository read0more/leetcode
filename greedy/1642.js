const {
    MinPriorityQueue,
} = require('@datastructures-js/priority-queue');

/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
var furthestBuilding = function (heights, bricks, ladders) {
    // leetcode에서는 주석친 부분으로 변경해야 정상 동작함. 일반 환경의 경우에는 주석친 부분으로 하면 런타임 에러
    const length = heights.length - 1;
    const minQueue = new MinPriorityQueue(x => x);
    // const minQueue = new MinPriorityQueue({priority: x => x})

    for (let i = 0; i < length; i++) {
        let value = heights[i + 1] - heights[i];

        if (0 < value) {
            if (ladders) {
                minQueue.enqueue(value);
                ladders--;
            } else if (minQueue.front() && minQueue.front() < value) {
            // } else if (minQueue.front() && minQueue.front().element < value) {
                minQueue.enqueue(value);
                // bricks -= minQueue.dequeue().element;
                bricks -= minQueue.dequeue();
            } else {
                bricks -= value;
            }
    
            if (bricks < 0) {
                return i;
            }
        }        
    }

    return length;
};


// console.log(furthestBuilding([4, 2, 7, 6, 9, 14, 12], 5, 1)); // 4
// console.log(furthestBuilding([4, 12, 2, 7, 3, 18, 20, 3, 19], 10, 2)); // 7
// console.log(furthestBuilding([14, 3, 19, 3], 17, 0)); // 3
console.log(furthestBuilding([4, 12, 2, 7, 3, 18, 20, 3, 19], 10, 2));