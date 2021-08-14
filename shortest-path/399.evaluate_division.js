/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */

var calcEquation = function (equations, values, queries) {
  const graph = makeGraph(equations, values);
  const result = [];
  for (const query of queries) {
    result.push(getResult(query[0], query[1], {}, graph));
  }

  return result;
};

function getResult(start, end, visited, graph) {
  if (!graph[start]) {
    return -1.0;
  }

  if (graph[start][end]) {
    return graph[start][end];
  }

  visited[start] = true;
  for (const [key, value] of Object.entries(graph[start])) {
    if (!visited[key]) {
      const weight = getResult(key, end, visited, graph);

      if (weight !== -1.0) {
        return weight * value;
      }
    }
  }

  return -1.0;
}

function makeGraph(equations, values) {
  const result = {};

  for (let i = 0; i < equations.length; i++) {
    let a = equations[i][0];
    let b = equations[i][1];

    if (result[a]) {
      result[a] = { ...result[a], [b]: values[i] };
    } else {
      result[a] = { [b]: values[i] };
    }

    if (result[b]) {
      result[b] = { ...result[b], [a]: 1 / values[i] };
    } else {
      result[b] = { [a]: 1 / values[i] };
    }
  }

  return result;
}

console.log(
  calcEquation(
    [
      ["a", "b"],
      ["b", "c"],
    ],
    [2.0, 3.0],
    [
      ["a", "c"],
      ["b", "a"],
      ["a", "e"],
      ["a", "a"],
      ["x", "x"],
    ]
  )
);

console.log(
  calcEquation(
    [
      ["a", "b"],
      ["b", "c"],
      ["bc", "cd"],
    ],
    [1.5, 2.5, 5.0],
    [
      ["a", "c"],
      ["c", "b"],
      ["bc", "cd"],
      ["cd", "bc"],
    ]
  )
);
