//! Way - 01 => Taking Two Objects to store the Vowel and Consonant Frequencies

/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
    let vowObj = {};
    let conObj = {};
    let maxVowel = 0;
    let maxCon = 0;

    for (let i = 0; i < s.length; i++) {
        // Vowel Case
        if (s[i] === "a" || s[i] === "e" || s[i] === "i" || s[i] === "o" || s[i] === "u") {
            if(vowObj[s[i]]) {
                vowObj[s[i]] = vowObj[s[i]] + 1
            } else {
                vowObj[s[i]] = 1
            }
        } else {
            if(conObj[s[i]]) {
                conObj[s[i]] = conObj[s[i]] + 1
            } else {
                conObj[s[i]] = 1
            }
        }
    }

    let vowelFreq = Object.values(vowObj)
    maxVowel = Math.max(0, ...vowelFreq) 

    let conFreq = Object.values(conObj)
    maxCon = Math.max(0, ...conFreq)

    return maxVowel + maxCon

};

//! Way - 02 => Doing the same thing in a single object and then finding the max vowel and consonant frequency from that object

var maxFreqSum = function (s) {
    let map = {}
    let maxVowel = 0;
    let maxConsonant = 0;

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            map[s[i]]++
        } else {
            map[s[i]] = 1
        }
    }

    // Finding the Max Vowel Inside the map
    let vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < s.length; i++) {
        if(vowels.includes(s[i])) {
            if(map[s[i]] > maxVowel) {
                maxVowel = map[s[i]]
            }
        } else {
            if(map[s[i]] > maxConsonant) {
                maxConsonant = map[s[i]]
            }
        }
    }

    return maxVowel + maxConsonant

};

//! Way - 03 => Second loop is running for the map object instead of the string to find the max vowel and consonant frequency So 
//!             It Reduces no of iterations in the second loop and makes it more efficient

var maxFreqSum = function (s) {
    let map = {}
    let maxVowel = 0;
    let maxConsonant = 0;

    for (let i = 0; i < s.length; i++) {
        if (map[s[i]]) {
            map[s[i]]++
        } else {
            map[s[i]] = 1
        }
    }

    // Finding the Max Vowel Inside the map
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let mapKeys = Object.keys(map)

    for (let i = 0; i < mapKeys.length; i++) {

        if(vowels.includes(mapKeys[i])) {
            if(map[mapKeys[i]] > maxVowel) {
                maxVowel = map[mapKeys[i]]
            }
        } else {
            if(map[mapKeys[i]] > maxConsonant) {
                maxConsonant = map[mapKeys[i]]
            }
        }
    }

    return maxVowel + maxConsonant

};

//! Improved Code => using ternary operator

var maxFreqSum = function (s) {
    let map = {}
    let maxVowel = 0;
    let maxConsonant = 0;

    for (let i = 0; i < s.length; i++) {
        map[s[i]] = !map[s[i]] ? 1 : ++map[s[i]]
    }

    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let mapKeys = Object.keys(map)

    for (let i = 0; i < mapKeys.length; i++) {
        if (vowels.includes(mapKeys[i])) {
            maxVowel = Math.max(maxVowel, map[mapKeys[i]])
        } else {
            maxConsonant = Math.max(maxConsonant, map[mapKeys[i]])
        }
    }

    return maxVowel + maxConsonant
};