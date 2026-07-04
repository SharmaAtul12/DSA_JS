//! Approach 1 : My solution In first time 
// TC : O(n) square because in every iteration we are checking the values of map and keys of map which have time complexity of O(n) 
// and we are iterating the string of length n so overall time complexity is O(n^2) . here SC : o(1) as we are using a map of fixed size 
// 256 for ascii characters.

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    let map = {}

    for(let i = 0; i < s.length; i++) {
        if(map[s[i]] && map[s[i]] !== t[i]) {
            return false
        } else {
            if(Object.values(map).includes(t[i]) && !Object.keys(map).includes(s[i])) {
                return false
            } else {
                map[s[i]] = t[i]
            }
        }
    }
    console.log(map)
    return true
};

//! Approach 2 : Optimized solution Using two maps to store the mapping of characters from s to t and t to s
// TC : O(n) as we are iterating the string of length n and SC : O(1) as we are using a map of fixed size 256 for ascii characters.


var isIsomorphic = function(s, t) {
    let sTMap = {}
    let tSMap = {}

    for(let i = 0; i < s.length; i++) {
        if(tSMap[t[i]] && tSMap[t[i]] !== s[i] || sTMap[s[i]] && sTMap[s[i]] !== t[i]) {
            return false
        } else {
            sTMap[s[i]] = t[i];
            tSMap[t[i]] = s[i]
        }
    }
    return true    
};
