/**
 * @param {number} n
 * @return {boolean}
 */

var calSum = function (num) {
    let sum = 0;

    while (num > 0) {
        let lastDigit = num % 10;
        sum = sum + (lastDigit * lastDigit);
        num = Math.floor(num / 10)
    }

    return sum;
}

var isHappy = function (n) {
    let set = new Set();
    let numSum = n;
    while (true) {
        numSum = calSum(numSum)

        if (numSum === 1) return true;

        if (!set.has(numSum)) {
            set.add(numSum)
        }
        else {
            return false
        }
    }
};