/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 -  JavaScript's default sort() compares elements as strings. Example: [1, 30, 4, 21, 100000] would be sorted as [1, 100000, 21, 30, 4].
 - Because it take 1 of 100000 and compare it with 21, 30, 4. So we need to provide a comparator function to sort the array in ascending order.

    Explaination of the comparator function: 
    JavaScript's sort() already contains the sorting algorithm. My comparator function doesn't perform the sorting—it simply 
    tells JavaScript which of two elements should come first. If the comparator returns a negative value, the first element stays 
    before the second. If it returns a positive value, the second element comes first. Returning zero means both elements 
    are considered equal, so their relative order doesn't need to change.
 */

var maxProduct = function(nums) {
    let n = nums.length;
    nums = nums.sort((a,b) => a - b);

    // Because The Question want to return : the maximum value of (nums[i]-1)*(nums[j]-1). 
    // That's why we have subtract 1 from the last two elements of the sorted array and multiply them together to get the maximum product.
    return ((nums[n-1]-1)*(nums[n-2]-1));
};