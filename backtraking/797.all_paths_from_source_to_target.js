/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const result = [];
  const target = graph.length - 1;

  const dfs = (index, path) => {
    if (index === target) {
      result.push(path);
      return;
    }

    for (const nextPath of graph[index]) {
      dfs(nextPath, [...path, nextPath]);
    }
  };

  dfs(0, [0]);
  return result;
};

function print(graph) {
  console.log("---------------");
  const result = allPathsSourceTarget(graph);
  for (const i of result) {
    console.log(i);
  }
  console.log("---------------");
}

print([[1, 2], [3], [3], []]);
print([[4, 3, 1], [3, 2, 4], [3], [4], []]);
