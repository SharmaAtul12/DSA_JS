/**
 * @param {number} num
 * @return {number}
 */

/**
 * In this problem, we are given a number and we need to find the number of steps to reduce it to zero. 
 * The rules for reducing the number are as follows:
 * - If the number is even, divide it by 2.
 * - If the number is odd, subtract 1 from it.
 */

var numberOfSteps = function(num) {
    let steps = 0;

    //! If the number is even, divide it by 2. If it's odd, subtract 1.
    while(num > 0) {
        if(num % 2 === 0) {
            num = num / 2;
        }
        else {
            num = num - 1;
        }
        steps++;
    }
    
    return steps
};