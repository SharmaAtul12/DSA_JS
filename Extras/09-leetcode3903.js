/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

//! Brute force solution -> TC: O(n^2), SC: O(1)
var firstStableIndex = function (nums, k) {
    let smallestStableIdx = -1;

    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        max = Math.max(max, nums[i]);

        let min = Infinity
        for (let j = i; j < nums.length; j++) {
            min = Math.min(min, nums[j])
        }

        let score = max - min;
        if (score <= k) {
            smallestStableIdx = i;
            break;
        }

    }
    return smallestStableIdx;
};

//! Optimized solution -> TC: O(n), SC: O(1)
var firstStableIndex = function (nums, k) {
    let n = nums.length;

    let suffixMin = new Array(n);
    suffixMin[n-1] = nums[n-1];

    for(let i = n - 2; i >= 0; i--) {
        suffixMin[i] = Math.min(nums[i], suffixMin[i+1])
    }

    let prefixMax = 0;
    for (let i = 0; i < n; i++) {
        prefixMax = Math.max(prefixMax, nums[i]);

        let score = prefixMax - suffixMin[i];
        if (score <= k) {
            return i;
        }

    }
    
    return -1;
};