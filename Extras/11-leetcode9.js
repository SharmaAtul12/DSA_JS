/**
 * @param {number} x
 * @return {boolean}
 */

/**
 * In this problem, we are given a number and we need to check if it is a palindrome. A palindrome is a number that reads the same 
 * backward as forward. We can solve this problem in two ways:
 * 1. Convert the number to a string and check if it is a palindrome.
 * 2. Without converting the number to a string, we can reverse the number and check if it is equal to the original number.
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

//! Without converting the number to a string

var isPalindrome = function (x) {
    if (x < 0) return false;

    let original = x
    let n = 0;

    while (x > 0) {
        let lastDigit = x % 10;
        n = n * 10 + lastDigit;
        x = Math.floor(x / 10);
    }
    
    return original === n
};