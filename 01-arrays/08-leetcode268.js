/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let givenEleSum = 0;
    let n = nums.length;
    let totalNeededSum = n * (n + 1) / 2; 

    for(let i = 0; i < n; i++) {
        givenEleSum = givenEleSum + nums[i];
    }

    return totalNeededSum - givenEleSum;
};

//! Second approach : Using two for loops

var missingNumber = function(nums) {
    let givenSum = 0;
    let neededSum = 0;

    for(let i = 0; i <= nums.length; i++) {
        neededSum = neededSum + i
    }

    for(let i = 0; i < nums.length; i++) {
        givenSum = givenSum + nums[i]
    }

    return neededSum - givenSum
};