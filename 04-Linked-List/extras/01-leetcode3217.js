/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number[]} nums
 * @param {ListNode} head
 * @return {ListNode}
 */

/**
 * ! Wrong thinking: Moving `curr` (`curr = curr.next`) changes the linked
 * list/head — it only moves the `curr` variable.
 * *Correct: Changing `curr.next` (`curr.next = curr.next.next`) changes the
 * actual links; when `curr === dummy`, this also changes `dummy.next`, giving
 * the new head.
 */


var modifiedList = function (nums, head) {
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
        set.add(nums[i])
    }

    let dummy = new ListNode();
    dummy.next = head;
    let curr = dummy;

    while (curr.next) {
        if (set.has(curr.next.val)) {
            curr.next = curr.next.next
        }
        else {
            curr = curr.next
        }
    }
    
    return dummy.next;
};