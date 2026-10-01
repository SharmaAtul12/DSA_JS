/**
 * @param {number} num
 * @return {number}
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