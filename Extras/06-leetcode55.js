/**
 * @param {number[]} nums
 * @return {boolean}
 */

/**
 * This Problem is about checking if we can reach the last index of the array starting from the first index. 
 * Each element in the array represents the maximum jump length from that position.
 * We will use a greedy approach to solve this problem.
 * so we will keep track of the maximum index we can reach at any point in time.
 */

var canJump = function(nums) {
    let maxReach = 0;

    for(let i = 0; i < nums.length; i++) {

      //! Agr Aisa Hua , means ham stuck ho gaye hai kisi index pp and vha ss ab aage nhi jaa skte , so return false
        if(i > maxReach) {
            return false;
        }

        //! i + nums[i] means current index + jump length from that index , so we are checking the maximum reach we can get from the current index and previous maxReach
        maxReach = Math.max(maxReach, i + nums[i])
    }

    //! If we are able to reach the end of the array , then return true
    return true;
};