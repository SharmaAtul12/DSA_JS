/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function(s) {
    let freq = {};
    let n = s.length;
    let maxFreq = 0;

    for(let c of s) {
        if(freq[c]) {
            ++freq[c]
        }
        else {
            freq[c] = 1
        }
        maxFreq = Math.max(maxFreq, freq[c])
    }

    // We used Math.ceil(n/2) because if we have odd length like n = 5 , then Math.floor(n/2) = 2 , but we can have 3 Even indexes in this case. 
    // So Math.ceil(n/2) will give us 3 which is 3 even indexes possible when n = 5. 
    if(maxFreq > Math.ceil(n/2)) {
        return ""
    }

    // Jiski Sabse Jyda Frequency hogi vo sabse Upr aayega . firstElement = highest freq element
    // And Sabse Phle highest freq element Ko he Fill krna hh Even Indexes me . 
    // So Usko Phla Element he bna lia sort krkr , and ab sabse yhi fill hoga .. 
    let chars = Object.keys(freq).sort((a,b) => freq[b] - freq[a])

    let result = new Array(n);

    let i = 0;
    for(ch of chars) {
        let count = freq[ch];
        while(count > 0) {
            // Means we have filled all even indexes and now we have to fill odd indexes , that start from 1 , and +2 krte jao
            if(i >= n) {
                i = 1;
            }
            result[i] = ch;
            --count;
            i = i + 2
        }
    }

    return result.join("")
    
};