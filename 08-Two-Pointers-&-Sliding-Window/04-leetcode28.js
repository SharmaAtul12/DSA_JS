/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

//! TC: O(n * m) where n is the length of haystack and m is the length of needle . SC: O(1)

var strStr = function(haystack, needle) {
    let n = haystack.length;
    let ws = needle.length;

    for(let i = 0; i <= n - ws; i++) {
        let j = 0
        //* Har Ek Window same size ke hogi and uspe starting ss leke end tak check krna h
        for(j = 0; j < ws; j++) {
            if(haystack[i+j] !== needle[j]) {
                //* Outer Loop pp Jao and then new Window Bnegi use check krenge 
                break;
            }
        }

        //* Agar j == ws h to iska matlab pura needle match ho gya current window ke sath and return i
        if(j === ws) {
            return i
        }
    }
    return -1;
};

//! Using KMP Algorithm : TC: O(n + m) where n is the length of haystack and m is the length of needle . SC: O(m) for storing lps array

var strStr = function (haystack, needle) {
    let n = haystack.length
    let m = needle.length

    let lps = [0];
    let i = 0;
    let j = 1;

    while (j < m) {
        if (needle[i] === needle[j]) {
            lps[j] = i + 1;
            i++;
            j++
        } else {
            if (i == 0) {
                lps[j] = 0;
                j++
            } else {
                i = lps[i - 1]
            }
        }
    }

    i = j = 0;

    while(i < n) {
        if(haystack[i] === needle[j]) {
            i++;
            j++;
        } else {
            if(j === 0) {
                i++
            } else {
                j = lps[j - 1]
            }
        }

        if(j === m) {
            return i - m
        }
    }

    return -1;
}; 