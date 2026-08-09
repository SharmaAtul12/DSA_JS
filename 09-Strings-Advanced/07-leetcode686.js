/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */

//! Using includes() Method ----->
var repeatedStringMatch = function (a, b) {
    let count = 1;
    let text = a;

    while (text.length < b.length) {
        text = text + a;
        ++count
    }

    for(let i = 0; i < 2; i++) {
        if (text.includes(b)) {
            return count;
        }
        else {
            text = text + a;
            ++count
        }
    }

    return -1
};

//! Using Rabink-Karp Algorithm

var repeatedStringMatch = function (a, b) {
    let count = 1;
    let text = a;

    while (text.length < b.length) {
        text = text + a;
        ++count
    }

    for (let i = 0; i < 2; i++) {
        if (rabinKarp(text, b)) {
            return count;
        }
        else {
            text = text + a;
            ++count
        }
    }

    return -1
};

var rabinKarp = function (text, pattern) {
    let base = 256;
    let mod = 1e9 + 7; // Equals to 1 × 10⁹ + 7

    let n = text.length;
    let m = pattern.length;

    let patternHash = 0;
    let windowHash = 0;

    // Initial Hash : that is for pattern & first window
    for (let i = 0; i < m; i++) {
        patternHash = (patternHash * base + pattern.charCodeAt(i)) % mod;
        windowHash = (windowHash * base + text.charCodeAt(i)) % mod
    }

    // Because We need to start from the 0th power. power = 1 Represent 10^0
    let power = 1;
    for (let i = 0; i < m - 1; i++) {
        power = (power * base) % mod
    }



    // Now We Will Run the Loop And Slide the Window
    for (let i = 0; i <= (n - m); i++) {
        if (patternHash === windowHash) {
            // Ab Check Krenge Ke Same hh . (i, i+m) is my current window characters
            if (pattern === text.substring(i, i + m)) {
                return true;
            }
        }

        // Silde the Window -----> Rolling Hash
        // When i > n - m , means that is the last window So Ab Aage nhi jaana
        if (i < n - m) {
            // 1. Removing the First Element of previous window
            windowHash = (windowHash - (power * text.charCodeAt(i))) % mod

            // 2. windowHash -ve bhi ho skta h as we are subtracting
            if (windowHash < 0) windowHash += mod;

            // 3. Adding the Next Element to the window
            windowHash = (windowHash * base + text.charCodeAt(i + m)) % mod
        }

    }

    return false;
};