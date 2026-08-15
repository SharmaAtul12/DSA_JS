var maxSubArray = function(nums) {
    let sum = 0;

    /**
     * "reason": "-Infinity is used because the maximum subarray sum can be negative.",
     * "problem_with_zero": "If maxSum starts at 0, an all-negative array would incorrectly return 0.",
     * "purpose": "Starting with -Infinity ensures the first actual subarray sum becomes the maximum, even when it is negative."
     */

    let maxSum = -Infinity;

    for(let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
        maxSum = Math.max(maxSum, sum);
        if(sum < 0) {
            sum = 0;
        }
    }

    return maxSum
};