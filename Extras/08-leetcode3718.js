/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/**
 * Approach :->
 * 1. Create a set to store the unique numbers from the input array.
 * 2. Iterate through the input array and add each number to the set.
 * 3. Iterate through the multiples of k and check if each is in the set.
 * 4. Return the first multiple of k that is not in the set.
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