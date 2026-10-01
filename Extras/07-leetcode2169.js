/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */

/**
 * Approach :-> 
 * Keep subtracting the smaller number from the larger number until one of them becomes 0.
 * Count the number of operations performed.
 */

var countOperations = function(num1, num2) {
    let count = 0;
    while(num1 > 0  && num2 > 0) {
        if(num1 >= num2) {
            num1 = num1 - num2
        }
        else {
            num2 = num2 - num1
        }
        count++;
    }
    return count
};