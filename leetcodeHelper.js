function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
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

module.exports.arrayToList = arrayToList;
