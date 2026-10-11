/**
 * LeetCode 2778 - Sum of Squares of Special Elements
 *
 * MENTAL MODEL: keep "position" and "index" as two separate worlds.
 *
 *   nums = [10, 20, 30, 40]
 *   Problem position (1-based):  1   2   3   4
 *   Array index    (0-based):    0   1   2   3
 *                                ↑ difference is always 1
 *
 *   array index      -> i
 *   problem position -> i + 1
 *   element value    -> nums[i]
 *
 * The problem is 1-indexed, but JavaScript arrays are 0-indexed.
 * So DON'T change how you loop. Loop normally over the array (0..n-1),
 * and only convert to the problem's position (i + 1) when a condition needs it.
 *
 * @param {number[]} nums
 * @return {number}
 */
var sumOfSquares = function (nums) {
    let n = nums.length;
    let final = 0;

    // Traversal belongs to the ARRAY -> use 0-based index i.
    for (let i = 0; i < n; i++) {
        // Condition belongs to the PROBLEM -> convert index to 1-based position (i + 1).
        // "nums[i] is special if its position (i + 1) divides n."
        if (n % (i + 1) === 0) {
            // Element value is still accessed with the array index -> nums[i].
            final += nums[i] * nums[i];
        }
    }

    return final;
};
