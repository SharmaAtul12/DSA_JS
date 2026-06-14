//! 1st Method (using hashMap(hashTable) or we say set in JS)------------------------>>

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let set = new Set();
    let curr = head;

    while(curr != null) {
        if(set.has(curr)) {
            return true;
        } else {
            set.add(curr)
            curr = curr.next;
        }
    }
    return false;
};

//! 2nd Method (Floyd's Cycle Detection Algorithm)------------------------>>

var hasCycle = function(head) {
    if(head === null) return false;

    let slow = head
    let fast = head.next;

    while(slow !== fast) {
        // Aage Jane ss phle check krlo ke aage Null to nhi . agr h means cycle does not exist
        if(fast === null || fast.next === null) {
            return false;
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};