/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let hashP = Array(26).fill(0);
    let hashW = Array(26).fill(0);
    let windowLen = s1.length;

    //! Starting mm Permuatation vali array and fisrt window of s2 ko fill Diya . 
    for(let i = 0; i < windowLen; i++) {
        ++hashW[s2.charCodeAt(i) - 97]
        ++hashP[s1.charCodeAt(i) - 97]
    }

    let i = 0;
    let j = windowLen - 1;

    //! Yha Par Window Slide krte hue aage jayegi 1 by 1 aur har bar check krte rhege ki hashP and hashW same hai ya nhi
    while(j < s2.length) {
        if(isHashSame(hashP, hashW)) {
            return true 
        } 
        else {
            --hashW[s2.charCodeAt(i) - 97]
            i++;
            j++;
            ++hashW[s2.charCodeAt(j) - 97]
        }
    }
    return false
};

var isHashSame = function (hashP, hashW) {
    for(let i = 0; i < 26; i++) {
        if(hashP[i] !== hashW[i]) {
            return false
        }
    }
    return true
}