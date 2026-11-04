/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    let i = digits.length - 1;
    let newArr = []

    if (digits[i] < 9) {
        ++digits[i];
        return digits
    }
    else {
        while (digits[i] === 9) {
            digits[i] = 0;
            i--;
        }
        if (i < 0) {
            newArr = [1, ...digits]
            return newArr;
        } else {
            ++digits[i];
            return digits;
        }
    }
};

//* Little Less code -> 

var plusOne = function (digits) {
    let n = digits.length - 1;

    for (let i = n; i >= 0; i--) {

        if (digits[i] < 9) {
            ++digits[i];
            return digits
        }

        digits[i] = 0;
    }

    digits.unshift(1);
    return digits;
};