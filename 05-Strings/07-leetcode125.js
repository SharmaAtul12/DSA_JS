//! Approach 01 : Extra Space : TC : O(n) SC : O(n) + O(n) = O(n)

/**
 * @param {string} s
 * @return {boolean}
 */

// Way 1 : 

var isPalindrome = function(s) {
    let filteredString = ""

    s = s.toLowerCase();
    for(let i = 0; i < s.length; i++) {
        if(s[i].match(/[a-z0-9]/)) {
            filteredString += s[i]
        }
    }

    // Reversing the filtered string
    let n = filteredString.length;
    let revString = ""

    for(let j = n - 1; j >= 0; j--) {
        revString += filteredString[j]
    }

    return revString === filteredString
    
};

// Way 2 :

var isPalindrome = function(s) {
    let filteredString = ""
    let revString = ""

    s = s.toLowerCase();
    for(let i = 0; i < s.length; i++) {
        if(s[i].match(/[a-z0-9]/)) {
            filteredString += s[i]
            revString = s[i] + revString
        }
    }
    return revString === filteredString
};

