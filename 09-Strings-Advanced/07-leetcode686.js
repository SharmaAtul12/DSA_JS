/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
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