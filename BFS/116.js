function Node(val, left, right, next) {
  this.val = val === undefined ? null : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
  this.next = next === undefined ? null : next;
}

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  let next = [root];
  let temp = [];

  while (next.length) {
    let node = next.shift();

    if (node.left !== null) temp.push(node.left);
    if (node.right !== null) temp.push(node.right);

    if (next.length === 0) {
      for (let i = 0; i < temp.length; i++) {
        temp[i].next = temp[i + 1] ?? null;
      }

      next = [...temp];
      temp = [];
    }
  }

  return root;
};

const n1 = new Node(4);
const n2 = new Node(5);
const n3 = new Node(6);
const n4 = new Node(7);
const n5 = new Node(2, n1, n2);
const n6 = new Node(3, n3, n4);
const root = new Node(1, n5, n6);

connect(null);
a = 1;
