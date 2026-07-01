//! Approach 1 : Brute Force => TC: O(n*m) where n = length of stones and m = length of jewels and SC: O(1) . 
/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

// Way : 1
var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for(let i = 0; i < stones.length; i++) {
        for(let j = 0; j < jewels.length; j++) {
            if(stones[i] === jewels[j]) {
                count++;
                break;
            }
        }
    }
    return count;
};

// Way : 2

var numJewelsInStones = function(jewels, stones) {
    let count = 0;
    for(let i = 0; i < stones.length; i++) {
        if(jewels.includes(stones[i])) {
            count++;
        }
    }
    return count;
};


//! Approach 2 : Using HashMap => TC: O(n) and SC: O(1) because max no of alphabets in set is around 52 (26 lowercase + 26 uppercase).
//! So we can say that SC is O(1) because it is constant space.

var numJewelsInStones = function(jewels, stones) {
    let set = new Set();
    let count = 0

    // Adding All the values of jewels inside the set (It will also ignore the duplicates)
    for(let i = 0; i < jewels.length; i++) {
        set.add(jewels[i]);
    }

    // Searching the Value
    for(let j = 0; j < stones.length; j++) {
        if(set.has(stones[j])) count++
    }

    return count
};

