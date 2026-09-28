/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
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