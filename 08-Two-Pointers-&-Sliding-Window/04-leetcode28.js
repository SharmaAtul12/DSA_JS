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