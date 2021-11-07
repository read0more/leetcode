/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let size = 0;
  const nullHead = { next: head };
  let curr = nullHead;
  const array = [nullHead];

  while (curr.next) {
    curr = curr.next;
    size++;
    array.push(curr);
  }

  const target = size - n;
  if (array[target].next) {
    array[target].next = array[target].next.next;
  } else {
    array[target].next = null;
  }

  return nullHead.next;
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
  a = 1;
}

const n2 = new ListNode(2, null);
const head = new ListNode(1, n2);
print(removeNthFromEnd(head, 2));

function print(head) {
  while (head) {
    s;
    console.log(head.val);
    head = head.next;
  }
}
