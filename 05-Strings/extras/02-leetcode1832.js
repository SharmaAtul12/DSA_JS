/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
    let n = sentence.length;
    let arr = new Array(26).fill(0);

    for (let i = 0; i < n; i++) {
        let idx = (sentence.charCodeAt(i) - 97);
        arr[idx]++;
    }

    for (let i = 0; i < 26; i++) {
        if (arr[i] === 0) {
            return false
        }
    }
    return true;
};