/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    const set = new Set();
    let list1 = headA;
    let list2 = headB;
    
    while(list1) {
        set.add(list1);
        list1 = list1.next;
    }

    while(list2) {
        if(set.has(list2)) return list2;
        list2 = list2.next;
    }

    return null
}; 