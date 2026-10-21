/**
 * @param {number} n
 * @return {string}
 */

/**
 * This is the Problem , In which we have to find the nth term of the count and say sequence.
 * So we have used the Run Length Encoding Algorithm to solve this problem in a single pass and without using any extra space.
 * In this algorithm we have used two pointers, one for the current element and one for the next element.
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