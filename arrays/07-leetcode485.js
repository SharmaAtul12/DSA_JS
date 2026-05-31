// My Solution  => Using Array to store the count of consecutive ones and then finding the max number in that array.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let consOnes = [];
    let oneCount = 0;
    for(let i = 0; i< nums.length; i++) {
        if(nums[i] === 1) {
            oneCount++;
            if(i === nums.length - 1) {
                consOnes.push(oneCount)
            }
        } else {
            consOnes.push(oneCount);
            oneCount = 0
        }
    }
    const maxNum = Math.max(...consOnes);
    return maxNum;
};

// Better Solution => Using a variable to store the count of consecutive ones and another variable to store the max count of consecutive ones.

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let oneCount = 0;
    let maxCount = 0;

    for(let i = 0; i< nums.length; i++) {
        if(nums[i] === 1) {
            oneCount++;
        } else {
            maxCount = Math.max(oneCount, maxCount)
            oneCount = 0
        }
    }
    return Math.max(oneCount, maxCount);
};