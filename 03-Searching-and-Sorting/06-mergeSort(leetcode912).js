/**
 * @param {number[]} nums
 * @return {number[]}
 */
// This is the main function which will be called to sort the array using merge sort algorithm
var sortArray = function(nums) {
    if(nums.length <= 1) return nums;

    let mid = Math.floor(nums.length/2);
    let left = sortArray(nums.slice(0,mid));
    let right = sortArray(nums.slice(mid));

    return merge(left,right);
};

// Merge Two Sorted Array into One Sorted Array and return it
function merge(left,right) {
    let result = [];
    let i = 0;
    let j = 0;

    while(i < left.length && j < right.length) {
        if(left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }
    // In Case , Some elements remaining in array
    return [...result, ...left.slice(i), ...right.slice(j)];
}