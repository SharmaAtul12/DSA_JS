//! Approach 1 : My approach
// TC : O(n) SC : O(1) Because map will have at most 26 characters (a-z) so it will take constant space.
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function(s, t) {
    let sMap = {}
    let tMap = {}

    for(let i = 0; i < s.length; i++) {
        if(sMap[s[i]]) {
            sMap[s[i]] = sMap[s[i]] + 1
        } else {
            sMap[s[i]] = 1
        }
    }

    for(let i = 0; i < t.length; i++) {
        if(tMap[t[i]]) {
            tMap[t[i]] =tMap[t[i]] + 1
        } else {
            tMap[t[i]] = 1
        }
    }

    let sKeys = Object.keys(sMap);
    let tKeys = Object.keys(tMap);

    if(sKeys.length !== tKeys.length) {
        return false;
    }

    // s ke sabhi keys kk liye check krenge (because s ke sabhi keys honi chaiye t mm)
    for(let key of sKeys) {
        if(sMap[key] !== tMap[key]) {
            return false
        }
    }

    return true

};

//! Approach 2 : TC : O(nlogn) SC : O(n) where n is the length of the string. Because we are using sort function which takes O(nlogn) time and O(n) space for storing the sorted string.

var isAnagram = function(s, t) {
    s = s.split("").sort().join("")
    t = t.split("").sort().join("")

    return s === t
};

//! Approach 3 : without creating 2 maps
// TC : O(n) and SC : O(1) because map will have at most 26 characters (a-z) so it will take constant space.

var isAnagram = function (s, t) {
    let map = {}

    if(s.length !== t.length) {
        return false
    }

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            map[s[i]] = map[s[i]] + 1
        } else {
            map[s[i]] = 1
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (map[t[i]] && map[t[i]] > 0) {
            map[t[i]] = map[t[i]] - 1
        } else {
           return false
        }
    }

    return true
};