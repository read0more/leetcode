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
 var mergeTwoLists = function(list1, list2) {
    const nullHead = new ListNode();
    let curr = nullHead;

    while (list1 && list2) {
        if (list1.val < list2.val) {            
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }
    
    curr.next = list1 || list2;

    return nullHead.next;
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

mergeTwoLists(helper.arrayToList([1, 2, 4]), helper.arrayToList([1, 3, 4]));
mergeTwoLists(helper.arrayToList([-10,-6,-6,-6,-3,5]), helper.arrayToList([]));
