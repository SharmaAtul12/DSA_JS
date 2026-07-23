/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    let l = 0;
    let r = nums.length - 1;

    // Handling the Case of Given Array phle ss he Sorted Array hh..
    if (nums[l] <= nums[r]) {
        return nums[l]
    }

    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2)

        // Searching Space Kam hua means new left right and middle and kya pta ye bhi sorted ho 
        if (nums[l] <= nums[r]) {
            return nums[l]
        }

        // Rotating Point Mil Gya
        if (nums[mid] < nums[mid - 1]) {
            return nums[mid]
        }


        if (nums[l] <= nums[mid]) {
            // Left Sorted : move right side
            l = mid + 1
        } else {
            // Right Sorted : move left side 
            r = mid - 1;
        }
    }
};