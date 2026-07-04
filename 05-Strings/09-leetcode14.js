/**
 * @param {string[]} strs
 * @return {string}
 */

//! TC : O(S) where S is the sum of all characters in all strings Because we are traversing all characters of all strings only once.
//! SC : O(1) as we are not using any extra space.

var longestCommonPrefix = function(strs) {
    let x = 0;

    while(x < strs[0].length) {
        let ch = strs[0][x];
        
        for(let i = 1; i < strs.length; i++) {
            if(ch != strs[i][x] || x == strs[i].length) {
                // break condition , return the substring
                return strs[0].substring(0,x)
            }
        }

        x++;
    }
    return strs[0]
};