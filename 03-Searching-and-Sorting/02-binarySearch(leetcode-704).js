/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;

    // Here = is because of when there is only 1 element is in array So left and right is 0 which does    
    // not satisfy the condition l < r , that's why we added equals to which is l <= r . 
    while(left <= right) {
        let middle = Math.floor((left+right) / 2) ;
        if(nums[middle] === target) {
            return middle;
        } else if(target > nums[middle]) {
            left = middle + 1;
        } else {
            right = middle - 1;
        }
    }
    return -1;
};