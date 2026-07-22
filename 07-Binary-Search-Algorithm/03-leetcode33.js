/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let l = 0;
    let r = nums.length - 1;

    while (l <= r) {
        let mid = Math.floor(l + (r - l) / 2);

        if (target === nums[mid]) {
            return mid;
        }

        // = is because to handle the corner case when there is 2 elements in nums like [3,1] and target is 1
        if (nums[mid] >= nums[l]) {
            // LEFT SORTED
            if (target < nums[mid] && target >= nums[l]) {
                r = mid - 1;
            } else {
                l = mid + 1
            }
        } else {
            // RIGHT SORTED
            if (target > nums[mid] && target <= nums[r]) {
                l = mid + 1;
            } else {
                r = mid - 1
            }
        }
    }
    return -1;
};