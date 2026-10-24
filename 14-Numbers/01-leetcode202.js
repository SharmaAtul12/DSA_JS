/**
 * @param {number} n
 * @return {boolean}
 */

/**
 * In this Problem we are given a number n and we have to check whether it is a Happy Number or not.
 * A happy number is a number defined by the following process:
 * Starting with any positive integer, replace the number by the sum of the squares of its digits,
 * and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle that does not include 1.
 * Those numbers for which this process ends in 1 are happy numbers.
 * Return true if n is a happy number, and false if not.
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