//! Approach 1 : 
/**
  - Notes : 
  1. Isme at every iteration , we are calculating the sum of all the previous elements and adding it to the current index value.
*/
var runningSum = function(nums) {
    let lastSum = 0;

    for(let i = 0; i < nums.length; i++) {
        let currIndexVal = nums[i];

        // Meri Current Value is : Pichli sabhi digits ka sum + current index value
        nums[i] = lastSum + currIndexVal;

        lastSum = lastSum + currIndexVal
    }

    return nums;
};

//! Approach 2 :

/**
  - Notes : 
  1. Isme We are starting from index 1 and adding the previous index value to the current index value.
  2. Because previous index value is already the sum of all the previous elements.
*/

var runningSum = function (nums) {
    for (let i = 1; i < nums.length; i++) {
        nums[i] = nums[i] + nums[i-1]
    }
    return nums;
};