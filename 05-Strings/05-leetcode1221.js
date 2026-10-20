/**
 * @param {string} s
 * @return {number}
 */

//! Approach 1 : Using Two Variables
/** 
 *  In this Problem we have to find the number of balanced strings in the given string. 
 *  A balanced string is a string that has an equal number of 'R' and 'L' characters.
 */

var balancedStringSplit = function(s) {
    let balanceCount = 0;
    let rCount = 0;
    let lCount = 0;

    for(let i = 0; i < s.length; i++) {
        if(s[i] === "R") {
            rCount++;
        } else {
            lCount++;
        }

        if(rCount === lCount) {
            balanceCount++;
            rCount = 0;
            lCount = 0;
        }
    }
    return balanceCount
};

//! Approach 2 : Using Single Variable 

var balancedStringSplit = function (s) {
    let balanceCount = 0;
    let temp = 0;

    for (let i = 0; i < s.length; i++) {
        s[i] === "R" ? temp++ : temp--

        if (temp === 0) {
            balanceCount++;
        }
    }
    return balanceCount
};