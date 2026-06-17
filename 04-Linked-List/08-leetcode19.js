// Approach 1 : 
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
var removeNthFromEnd = function(head, n) {
    let sentinelNode = new ListNode();
    sentinelNode.next = head;
    let curr = head;
    let prev = sentinelNode;

    // 1. Calculate the length of linkedList 
    let length = 0;
    while(curr) {
        curr = curr.next;
        length++;
    }

    //2. Running the Main Loop 
    for(let i = 0; i < (length - n); i++) {
        prev = prev.next;
    }

    //3. Delete that Node
    prev.next = prev.next.next;

    return sentinelNode.next;
};

// Approach 2 => Using Two Pointers

var removeNthFromEnd = function(head, n) {
    let sentinelNode = new ListNode();
    sentinelNode.next = head;

    let second = sentinelNode;
    let first = sentinelNode;

    // Moving the first Pointer n step ahead
    for(let i = 0; i < n ; i++) {
        first = first.next;
    };

    // Move Both the pointers ahead until first reaches the last element 
    while(first.next) {
        second = second.next;
        first = first.next;
    }

    // Just Delete second.next
    second.next = second.next.next;

    return sentinelNode.next;
};