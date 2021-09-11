// https://leetcode.com/problems/permutations/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const visited = new Array(nums.length + 1).fill(false);

  return dfs(nums, visited, [], []);
};

function dfs(nums, visited, curr, answer) {
  if (curr.length === nums.length) {
    answer.push(Array.from(curr));
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (visited[i]) {
      continue;
    }

    curr.push(nums[i]);
    visited[i] = true;
    dfs(nums, visited, curr, answer);

    curr.pop();
    visited[i] = false;
  }

  return answer;
}

function run(nums) {
  const answer = permute(nums);

  for (const element of answer) {
    console.log(element);
  }
}

run([1, 2, 3]);
run([0, 1]);
run([1]);
