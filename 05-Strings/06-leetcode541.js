/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
    s = s.split("")
    // Jumping By 2k In Every Iteration
    for (let i = 0; i < s.length; i = i + 2 * k) {
        let mid = Math.floor(k / 2);

        // How Much Time swap loop will run that is mid 
        for (let j = 0; j < mid; j++) {
            let temp = s[i + j];
            s[i + j] = s[i+k-j-1]
            s[i+k-j-1] = temp;
        }
    }
    s = s.join("")
    return s
};