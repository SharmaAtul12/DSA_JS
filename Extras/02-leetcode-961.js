/**
 * @param {number[]} nums
 * @return {number}
 */


var repeatedNTimes = function (nums) {
    let map = {};

    for (let i = 0; i < nums.length; i++) {
      //! Agr Aisa hh Mtlb Vo Element Dobara Aaya hh So usko Return krdo
        if (map[nums[i]]) {
            return nums[i]
        }
        map[nums[i]] = 1

    }
};