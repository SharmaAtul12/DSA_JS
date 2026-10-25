/**
 * @param {number[]} nums
 * @return {number[]}
 */

/**
 * In this problem, we are given an array of integers and we need to find all the missing elements in the range [min, max] where min and max are the minimum and maximum elements in the array.
 * We will use a Set to store the elements of the array and then iterate through the range [min, max] to find the missing elements.
 */

var findMissingElements = function(nums) {
    let set = new Set();
    let arr = [];

    for(let i = 0; i < nums.length; i++) {
       set.add(nums[i])
    }

    //! Find the Max and Min Element in the Array So that we know the Range of the Array
    let max = Math.max(...nums);
    let min = Math.min(...nums);

    //! Ab Hum Loop Chalaenge From Min to Max and Check if the Element is Present in Set or Not
    for(let i = min; i <= max; i++) {
        if(!set.has(i)) {
            arr.push(i)
        }
    }

    return arr
};