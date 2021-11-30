const helper = require("./leetcodeHelper");

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    if (!list1 && !list2) return null;

    const values = [];
    const nodes = [];

    while (list1) {
        values.push(list1.val);
        list1 = list1.next;
    }

    while (list2) {
        values.push(list2.val);
        list2 = list2.next;
    }

    values.sort((a, b) => a - b);

    for (const value of values) {
        nodes.push(new ListNode(value));
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

mergeTwoLists(helper.arrayToList([1, 2, 4]), helper.arrayToList([1, 3, 4]));
mergeTwoLists(helper.arrayToList([-10,-6,-6,-6,-3,5]), helper.arrayToList([]));
