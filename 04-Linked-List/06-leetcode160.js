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

//! Approach 1: Hash Set : TC: O(n + m) SC: O(n)
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

//! Approach 2: Two Pointers : TC: O(n + m) SC: O(1)

var getIntersectionNode = function (headA, headB) {
    let list1 = headA;
    let list2 = headB;
    let n = m = 0;

    while (list1) {
        n++;
        list1 = list1.next;
    }

    while (list2) {
        m++;
        list2 = list2.next;
    }

    let diff = Math.abs(n-m);
    //* I want this - that firstList(headA) is small and secondList(headB) is Big
    //* In Case Agr Phle List Badi Hogi to usko swap kr dunga and choti bna dunga
    //* Doing this so that i can make sure that my first list is small and second list is big 
    //* so that i can move the second list ahead by diff and then start comparing both lists
    if(n > m) {
        let temp = headA
        headA = headB
        headB = temp
    } 

    //* Large List Ko diff Jitna Aage Badha rhe h 
    for(let i = 0; i < diff; i++) {
        headB = headB.next;
    }

    list1 = headA;
    list2 = headB;

    while(list1) {
        if(list1 === list2) {
            return list1
        }
        list1 = list1.next;
        list2 = list2.next;
    }
    return null
};