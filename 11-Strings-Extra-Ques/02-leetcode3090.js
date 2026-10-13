/**
 * @param {string} s
 * @return {number}
*/
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