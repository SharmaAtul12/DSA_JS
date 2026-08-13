/**
 * @param {number[]} nums
 * @return {number}
 */
//! Using HashMap ->
var majorityElement = function(nums) {
    let map = {};
    let majorEleCount = 0;
    let majorEle;
    
    for(let i = 0; i < nums.length; i++) {
        if(map[nums[i]]) {
            ++map[nums[i]]
        }
        else {
            map[nums[i]] = 1
        }

        if(map[nums[i]] > majorEleCount) {
            majorEleCount = map[nums[i]];
            majorEle = nums[i]
        }
    }

    return majorEle;
};