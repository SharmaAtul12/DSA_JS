/**
 * Brute Force Approach ❌
 *
 * Time Complexity: O(n × k)
 * Space Complexity: O(1)
 *
 * Why this is bad:
 * -----------------
 * 1. pop() takes O(1) time.
 * 2. unshift() takes O(n) time because every existing element
 *    has to be shifted one position to the right.
 * 3. We perform this operation 'k' times.
 *
 * Overall Complexity:
 * O(k × n)
 *
 * Worst Case:
 * n = 100000
 * k = 99999
 *
 * Operations ≈ 100000 × 99999 ≈ 10^10
 *
 * This is far too many operations, so the last hidden test case
 * on LeetCode exceeds the time limit (TLE).
 */

var rotate = function(nums, k) {
    let n = nums.length;

    // Rotating n times gives the same array,
    // so only rotate the remaining positions.
    k = k % n;

    // Rotate one position at a time.
    for (let i = 0; i < k; i++) {

        // Remove the last element. (O(1))
        let ele = nums.pop();

        // Insert it at the beginning.
        // BAD: unshift() is O(n) because every element
        // must be shifted one index to the right.
        nums.unshift(ele);
    }
};


//! My Appraoch : Optimized Approach ✅ : TC: O(n) and SC: O(1)

var rotate = function(nums, k) {
    let n = nums.length;
    k = k % n;

    var reverse = function(start, end) {
        let x = Math.floor((end-start+1)/ 2);
        for(let i = 0; i < x; i++) {
            let temp = nums[start+i];
            nums[start+i] = nums[end-i];
            nums[end-i] = temp;
        }
    }

    reverse(0, n-1);
    reverse(0, k-1)
    reverse(k, n-1)

};





