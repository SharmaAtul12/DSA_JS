/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head || !head.next) return head;

    let length = 0;
    let curr = head;
    
    while(curr) {
        length = length + 1;
        curr = curr.next
    }

    // Finding No of times to rotate
    k = k % length;

    // Initializing fast and slow pointer
    let fast = slow = head;

    // Moving fast to maintain the gap of k between fast and slow
    for(let i = 0; i < k ; i++) {
        fast = fast.next;
    }

    // Moving both the pointers until the list finishes
    while(fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    // Connect the last element to the head node
    fast.next = head;

    // remove the link from slow to its next element
    let newHead = slow.next;
    slow.next = null;

    // Updating head
    head = newHead;

    return head;

};