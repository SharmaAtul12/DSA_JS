/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/**
 * In this problem, we are given an array of integers and a number k. We need to find the first index i such that the difference 
 * between the maximum value in the prefix (from index 0 to i) and the minimum value in the suffix (from index i to n-1) is 
 * less than or equal to k.
 */


var firstStableIndex = function (nums, k) {
    let n = nums.length;

    let suffixMin = new Array(n);
    suffixMin[n - 1] = nums[n - 1];

    for (let i = n - 2; i >= 0; i--) {
        suffixMin[i] = Math.min(nums[i], suffixMin[i + 1])
    }

    let prefixMax = 0;
    for (let i = 0; i < n; i++) {
        prefixMax = Math.max(prefixMax, nums[i]);

        let score = prefixMax - suffixMin[i];
        if (score <= k) {
            return i
        }

    }
    return -1;
};