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


//! Approach 2 : Using Diff form of key generation . TC : o(n*m) and SC : O(n*m) where n is the number of strings and m is the maximum length of a string.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// Approach 1 : 

// var groupAnagrams = function (strs) {
//     let map = {};

//     for (let i = 0; i < strs.length; i++) {
//         let sortedStr = strs[i].split("").sort().join("")

//         if (!map[sortedStr]) {
//             map[sortedStr] = [strs[i]]
//         } else {
//             map[sortedStr].push(strs[i])
//         }
//     }
//     return Object.values(map)
// };

// Approach 2 : 

var groupAnagrams = function (strs) {
    let map = {}
    for(let i = 0; i < strs.length; i++) {
        // Creating the Key Logic 
        let freqArr = Array(26).fill(0);
        let s = strs[i];

        // Filling the Frequency of each letter in the array 
        for(let j = 0; j < s.length; j++) {
            let index = s[j].charCodeAt() - 'a'.charCodeAt();
            freqArr[index]++;
        }

        let key = "";
        // Creating the key like "a0b0c1d2......"
        for(let k = 0; k < 26; k++) {
            key = key + String.fromCharCode(97 + k) + freqArr[k]
        }

        // Filling the map
        if(!map[key]) {
            map[key] = [s]
        } else {
            map[key].push(s)
        }
    }
    return Object.values(map);
};
