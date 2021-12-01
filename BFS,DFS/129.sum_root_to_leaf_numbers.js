/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var sumNumbers = function (root) {
  const nums = [];

  if (root.left === null && root.right === null) {
    return root.val;
  }

  function dfs(node, num) {
    if (node.left !== null) {
      dfs(node.left, `${num}${node.left.val}`);
    }

    if (node.right !== null) {
      dfs(node.right, `${num}${node.right.val}`);
    }

    if (node.left === null && node.right === null) {
      nums.push(`${num}`);
    }
  }

  dfs(root, root.val);
  return nums.reduce((acc, curr) => acc + parseInt(curr), 0);
};

// https://leetcode.com/problems/sum-root-to-leaf-numbers/discuss/449071/4-line-JavaScript-solution(faster-than-96.8)
var goodAnswer = function (root, current = 0) {
  if (root === null) return 0;
  let value = current * 10 + root.val;
  if (root.left === null && root.right === null) return value;
  return goodAnswer(root.left, value) + goodAnswer(root.right, value);
};

// [1,2,3]
function q1() {
  const a = new TreeNode(1);
  const b = new TreeNode(2);
  const c = new TreeNode(3);

  a.left = b;
  a.right = c;

  console.log(sumNumbers(a));
}

// [4, 9, 0, 5, 1]
function q2() {
  const a = new TreeNode(4);
  const b = new TreeNode(9);
  const c = new TreeNode(0);
  const d = new TreeNode(5);
  const e = new TreeNode(1);

  a.left = b;
  a.right = c;
  b.left = d;
  b.right = e;

  console.log(sumNumbers(a));
}

// [4,9,0,null,1]
function q3() {
  const a = new TreeNode(4);
  const b = new TreeNode(9);
  const c = new TreeNode(0);
  const d = new TreeNode(null);
  const e = new TreeNode(1);

  a.left = b;
  a.right = c;
  b.right = e;

  console.log(sumNumbers(a));
}

q1();
q2();
q3();
