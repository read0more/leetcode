/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function (root) {
    if (!root) return [];

    let result = [];
    let q = [root];
    let temp = [];
    let next = [];

    while (true) {
      let node = q.shift();
      temp.push(node.val);

      if (node.left) {
        next.push(node.left);
      }

      if (node.right) {
        next.push(node.right);
      }

      if (q.length === 0) {
        if (temp.length) {
          result.push(temp);
        }
        q = [...next];

        if (next.length === 0) {
          break;
        }
        next = [];
        temp = [];
      }
    }

    return result;
  };