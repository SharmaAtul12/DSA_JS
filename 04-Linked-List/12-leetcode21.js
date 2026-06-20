//! My Solution => by creating a new linked list . 

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
    if(!list1 && !list2) return list1;
    let ans = new ListNode();
    let ansHead = ans;

    while(list1 && list2) {
        if(list1.val <= list2.val) {
            ans.next = list1;
            list1 = list1.next;
            ans = ans.next;
        } else {
            ans.next = list2;
            list2 = list2.next;
            ans = ans.next;
        }
    }

    if(list1 === null && list2) {
       ans.next = list2;
    }

    if(list2 === null && list1) {
      ans.next = list1;
    }

    return ansHead.next;
};

//! Sir Solution => without creating a new linked list .

var mergeTwoLists = function (list1, list2) {
    if(!list1) return list2;
    if(!list2) return list1;
    let curr = null;
    if (list1.val < list2.val) {
        curr = list1;
        list1 = list1.next;
    } else {
        curr = list2;
        list2 = list2.next;
    }

    let currCopy = curr;

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

    if (list1 === null && list2) {
        curr.next = list2;
    }

    if (list2 === null && list1) {
        curr.next = list1;
    }

    return currCopy;
};

//! Sir Solution => without creating a new linked list (using dummy node) .

var mergeTwoLists = function (list1, list2) {

    let start = new ListNode();
    let startCopy = start;

    while (list1 && list2) {
        if (list1.val < list2.val) {
            start.next = list1;
            list1 = list1.next;
        } else {
            start.next = list2;
            list2 = list2.next;
        }
        start = start.next;
    }

    if (list1 === null && list2) {
        start.next = list2;
    }

    if (list2 === null && list1) {
        start.next = list1;
    }

    return startCopy.next;
};

