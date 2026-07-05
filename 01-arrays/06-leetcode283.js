/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let p = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            nums[p] = nums[i];
            p++;
        } 
    }

    // Filling Remaining Values with 0
    for(let i = p; i < nums.length; i++) {
        nums[i] = 0;
    }
};

//! Approach 2 : My approach on 2nd time 

var moveZeroes = function(nums) {
    let x = 0;
    for(let i = 0; i < nums.length; i++) {
        if(nums[i] !== 0) {
            let temp = nums[x]
            nums[x] = nums[i]
            nums[i] = temp
            x++;
        }
    }
};