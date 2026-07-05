//! Approach 1 : TC : O(n * mlogm) where n is the number of strings and m is the maximum length of a string. 
//! SC : O(n * m) for storing the result in the map. where n is the number of strings and m is the maximum length of a string.
//! because we are storing the sorted version of each string as a key in the map. and the value is an array of strings that are anagrams of each other.

// Way 1 : by creating a copy of the original array and sorting it . 

var groupAnagrams = function (strs) {
    let map = {};
    let copy = [...strs]

    for (let i = 0; i < copy.length; i++) {
        copy[i] = copy[i].split("").sort().join("")

        if (!map[copy[i]]) {
            map[copy[i]] = []
            map[copy[i]].push(strs[i])
        } else {
            map[copy[i]].push(strs[i])
        }
    }
    let values = Object.values(map)
    return values
};


// Way 2 : without creating a copy of the original array and sorting it .

var groupAnagrams = function (strs) {
    let map = {};

    for (let i = 0; i < strs.length; i++) {
        let sortedStr = strs[i].split("").sort().join("")

        if (!map[sortedStr]) {
            map[sortedStr] = [strs[i]]
        } else {
            map[sortedStr].push(strs[i])
        }
    }
    return Object.values(map)
};


