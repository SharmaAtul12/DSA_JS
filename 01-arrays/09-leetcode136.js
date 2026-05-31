// Using HashMap (Object in JS) to store the count of each number in the array. Then we iterate through the array again to find the number that has a count of 1, which is the single number we are looking for.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let hash = {}

    for(let i = 0; i < nums.length; i++) {
        // Key first time aayi hai 
        if(!hash[nums[i]]) {
            hash[nums[i]] = 1;
        } else {
            // Key Phle ss exist krti ha means repeat hui hai so iska count increase krdo 
            hash[nums[i]]++;
        }
    }

    // Returning the Key whose value is 1 
    for(let i = 0; i < nums.length; i++) {
        if(hash[nums[i]] == 1) {
            return nums[i];
        }
    }
};

// Using XOR operator to find the single number. The XOR operator has a property that a ^ a = 0 and a ^ 0 = a. So if we XOR all the numbers in the array, the duplicate numbers will cancel each other out and we will be left with the single number.

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let result = 0
    for(let i = 0; i < nums.length; i++) {
        result = result ^ nums[i];
    }
    return result;
};