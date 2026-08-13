/**
 * @param {number[]} nums
 * @return {number[]}
 */

//! With Spread Operator ->
var getConcatenation = function(nums) {
    return [...nums,...nums]
};

//! Using Loop -> 
var getConcatenation = function(nums) {
    let n = nums.length;
    let result = new Array(2n);

    for(let i = 0; i < n; i++) {
        result[i] = nums[i];
        result[n+i] = nums[i]
    }

    return result;
};