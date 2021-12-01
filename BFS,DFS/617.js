const helper = require("../leetcodeHelper.js");

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
  if (!root1 && !root2) return null;

  const newRoot = new TreeNode((root1?.val || 0) + (root2?.val || 0));
  newRoot.left = mergeTrees(root1?.left, root2?.left);
  newRoot.right = mergeTrees(root1?.right, root2?.right);

  return newRoot;
};

// mergeTrees([1, 3, 2, 5], [2, 1, 3, null, 4, null, 7]);
// mergeTrees([1], []);
a = mergeTrees(
  helper.arrayToTree([1, 2, null, 3]),
  helper.arrayToTree([1, null, 2, null, 3])
);
console.log(1);
