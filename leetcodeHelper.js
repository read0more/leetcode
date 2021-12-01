function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function arrayToList(array) {
  const nodeArray = [];

  for (const element of array) {
    nodeArray.push(new ListNode(element));
  }

  for (let i = 0; i < nodeArray.length; i++) {
    if (nodeArray[i + 1]) {
      nodeArray[i].next = nodeArray[i + 1];
    } else {
      nodeArray[i].next = null;
    }
  }

  return nodeArray[0] ? nodeArray[0] : null;
}

function arrayToTree(array) {
  if (!array.length) return null;
  const nodeArray = [];

  for (const element of array) {
    nodeArray.push(new TreeNode(element));
  }

  for (
    let i = 0, left = 1, right = 2;
    i < nodeArray.length;
    i++, left += 2, right += 2
  ) {
    if (nodeArray[left]) {
      nodeArray[i].left = nodeArray[left].val ? nodeArray[left] : null;
    }

    if (nodeArray[right]) {
      nodeArray[i].right = nodeArray[right].val ? nodeArray[right] : null;
    }
  }

  return nodeArray[0] ? nodeArray[0] : null;
}

module.exports.arrayToList = arrayToList;
module.exports.arrayToTree = arrayToTree;
