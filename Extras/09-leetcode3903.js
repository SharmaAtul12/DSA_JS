/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
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