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