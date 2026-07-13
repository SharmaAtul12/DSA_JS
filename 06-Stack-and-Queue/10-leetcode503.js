//! Approach 1 : (By Double the array and use stack)

/**
  - Notes : 
  1. In this we cannot use map , because the array can have duplicate elements , and for duplicate elements NGE can be different \
  for each element. with map we can only store one NGE for each element. and again that got updated for all duplicate elements. 
  so we cannot use map here.

  2. In Next Greater Element I we can use map because there are no duplicate elements in the array. 
  so we can store NGE for each element in map. because there nums2 have unique elements. so we can store NGE for each element in map.
   because there nums2 have unique elements.
 */


var nextGreaterElements = function (nums) {
    let arr = [...nums, ...nums];
    let stack = [];

    let n = arr.length;
    let ans = Array(n).fill(-1)
    stack.push(arr[n - 1]);

    for (let i = n - 2; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (arr[i] < top) {
                ans[i] = top;
                break;
            } else {
                stack.pop();
            }
        }
        stack.push(arr[i])
    }

    return ans.slice(0, n / 2)
};

//! Approach 2 : Playing with the indexes (using i % n) and stack)
/** 
 - Notes : 
 1. Yha par Loop chlega 2n times , but vo chlega same array elements pe 2 barr . so ham Array double karne ki zarurat nhi hai.
 2. Ham same array ke elements pe 2 barr loop chla skte hai , by using i % n.
**/

var nextGreaterElements = function (arr) {
    let stack = [];

    let n = arr.length;
    let ans = Array(n).fill(-1)
    stack.push(arr[n - 1]);

    for (let i = (2 * n) - 2; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (arr[i % n] < top) {
                ans[i % n] = top;
                break;
            } else {
                stack.pop();
            }
        }
        stack.push(arr[i % n])
    }

    return ans.slice(0, n)
};