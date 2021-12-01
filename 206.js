const helper = require("./leetcodeHelper");

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
var reverseList = function (head) {
    if (!head) return null;

    const values = [];
    const nodes = [];

    while (head) {
        values.push(head.val);
        head = head.next;
    }

    for (let i = values.length - 1; 0 <= i; i--) {
        nodes.push(new ListNode(values[i]));
    }

    for (let i = 0; i < nodes.length - 1; i++) {
        nodes[i].next = nodes[i + 1];
    }

    return nodes[0];
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

// reverseList(helper.arrayToList([1, 2, 3, 4, 5]));
reverseList(helper.arrayToList([0, 1, 4, -2]));
