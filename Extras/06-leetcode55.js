/**
 * @param {number[]} nums
 * @return {boolean}
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