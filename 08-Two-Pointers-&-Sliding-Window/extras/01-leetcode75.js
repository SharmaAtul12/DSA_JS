/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/**
 * This is the Problem , In which we have to sort the array of 0's, 1's and 2's in a single pass and without using any extra space.
 * So we have used the Dutch National Flag Algorithm to solve this problem in a single pass and without using any extra space.
 * In this algorithm we have used three pointers, one for the current element, 
 * one for the next position of 0 and one for the next position of 2.
 */

var sortColors = function (nums) {
    let l = m = 0;
    let h = nums.length - 1;

    let temp = 0;
    while (m <= h) {
        if (nums[m] === 0) {
            temp = nums[m];
            nums[m] = nums[l];
            nums[l] = temp;
            ++l;
            ++m;
        }
        else if (nums[m] === 1) {
            ++m;
        }
        else {
            temp = nums[h];
            nums[h] = nums[m];
            nums[m] = temp;
            --h;
        }
    }
};