/**
 * @param {number} n
 * @return {number}
 */

//! TC : O(log n) - where n is the input number. The while loop runs until n becomes 0, and in each iteration, we divide n by 10, which reduces the number of digits in n. Therefore, the time complexity is logarithmic with respect to the number of digits in n.
//! SC : O(1) - We are using a constant amount of extra space to store the sum and product variables, regardless of the size of the input number n. Therefore, the space complexity is constant.

var subtractProductAndSum = function (n) {
    let sum = 0;
    let product = 1;

    while (n > 0) {
        let a = n % 10;
        sum = sum + a;
        product = product * a;
        n = Math.floor(n / 10);
    }

    return (product-sum)
};