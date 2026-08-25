/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var missingMultiple = function (nums, k) {
    let set = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (!set.has(nums[i])) {
            set.add(nums[i])
        }
    }

    let j = 1
    while (j) {
        if (!set.has(k * j)) {
            return (k * j)
        }
        j++;
    }
};