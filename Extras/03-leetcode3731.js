/**
 * @param {number[]} nums
 * @return {number[]}
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