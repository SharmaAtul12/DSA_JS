/**
 * @param {string} s
 * @return {number}
*/
//* This problem is a sliding window problem. We can use two pointers i and j to represent the current window. 
//* We can use a map to keep track of the frequency of each character in the current window. 
//* If the frequency of the current character is less than 2, we can expand the window by moving j to the right. 
//* Otherwise, we can shrink the window by moving i to the right until the frequency of the current character is less than 2. 
//* Finally, we can update the maximum length of the substring.

var maximumLengthSubstring = function(s) {
    let map = {};
    let i = j = 0;
    let maxLen = 0

    while(j < s.length) {
        if(!map[s[j]]) {
            map[s[j]] = 1;
            j++;
        }
        else {
            // Exist Krta hh and freq of it is less than 2.
            if(map[s[j]] < 2) {
                ++map[s[j]];
                j++;
            }
            else {
                --map[s[i]];
                i++;
            }
        }

        maxLen = Math.max(maxLen, j-i)
    }
    return maxLen;
};