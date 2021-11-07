/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let size = 1;
  const array = [head];

  while (head.next) {
    head = head.next;
    size++;
    array.push(head);
  }

  const middle = Math.floor(size / 2);
  return array[middle];
};
