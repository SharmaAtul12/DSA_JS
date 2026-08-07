/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let curr = "1"
    
    for(let i = 2; i <= n; i++) {
        curr = RLE(curr);
    }

    return curr
};

var RLE = function(val) {
    let count = 1;
    let ans = ""

    for(let j = 1; j <= val.length; j++) {
        if(val[j-1] === val[j]) {
            count++;
        }
        else {
            ans = ans + count + val[j-1];
            count = 1
        }
    }

    return ans
}