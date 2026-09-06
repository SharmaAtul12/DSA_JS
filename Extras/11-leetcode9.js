/**
 * @param {number} x
 * @return {boolean}
 */

//! Convert the number to a string and check if it is a palindrome

var isPalindrome = function(x) {
    let num = String(x);
    let newNum = "";

    for(let i = num.length - 1; i >= 0; i--) {
        newNum = newNum + num[i]
    }
    
    return num === newNum
};