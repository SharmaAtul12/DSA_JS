//! Method 1 : converting linked list to array and then checking for palindrome

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let arr = [];
    let curr = head;
    while(curr) {
        arr.push(curr.val);
        curr = curr.next;
    }

    // Creating the Reverse Array 
    let tempArray = [...arr];
    let n = tempArray.length;
    let halflen = Math.floor(tempArray.length/2)
    
    for(let i = 0; i < halflen; i++) {
        // swap(i, tempArray.length - i - 1);
        let temp = tempArray[i];
        tempArray[i] = tempArray[n - i - 1];
        tempArray[n - i - 1] = temp;
    }

    for(let i = 0; i < arr.length; i++) {
        if(arr[i] !== tempArray[i]) {
            return false;
        }
    }
    return true;
};

//! Method 2 : Using Fast and Slow Pointer Technique


var isPalindrome = function(head) {
  //1. Finding the Middle Element
    let slow = fast = head;
    while(fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next
    }

  //2. Reverse the second half of the list
  let prev = null;
  let curr = slow;
  while(curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  //3. Checking for Palindrome
  let firstList = head;
  let secondList = prev;
  while(secondList !== null) {
    if(secondList.val !== firstList.val) {
        return false;
    }
    firstList = firstList.next;
    secondList = secondList.next;
  }
  return true
};

