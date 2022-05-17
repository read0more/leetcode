/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var networkDelayTime = function(times, n, k) {
    // times[start, end, time]
    // k to 1~n까지의 shortest path 모두 구하고(distance) 가장 높은값 return 
    const graph = {}
    for (let i = 1;i <= n;i++) {
        graph[i] = [];
    }

    times.forEach((time) => {
        const [start, end, weight] = time;

        if (graph[start]) {
            graph[start].push({ end, weight });
        } else {
            graph[start] = [{ end, weight }];
        }        
    })

    const distance = {}
    for (let i = 1;i <= n;i++) {
        distance[i] = Infinity;
    }
    distance[k] = 0

    const process = [{
        node: k,
        weight: 0
    }];

    while (process.length) {
        const curr = process.shift();
        const adjs = graph[curr.node]

        adjs.forEach((adj) => {
            const { end, weight } = adj;
            const candidate = distance[curr.node] + weight;
            if (candidate < distance[end]) {
                distance[end] = candidate;
                process.push({
                    node: end,
                    weight: candidate
                })
            }
        });
    }

    let result = 0;
    Object.keys(distance).forEach((key) => {
        if (result < distance[key]) {
            result = distance[key]
        }
    });

    return result === Infinity ? -1 : result;
};

console.log(networkDelayTime([[1,2,1]], 2, 1))

/*
Input: times = [[2,1,1],[2,3,1],[3,4,1]], n = 4, k = 2
Output: 2
Example 2:

Input: times = [[1,2,1]], n = 2, k = 1
Output: 1
Example 3:

Input: times = [[1,2,1]], n = 2, k = 2
Output: -1
*/