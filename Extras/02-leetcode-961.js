/**
 * @param {number[]} nums
 * @return {number}
 */

/**
 * In this Problem we are given an array of size 2N and N+1 unique elements. We have to find the element which is repeated N times.
 * Since there are N+1 unique elements and the array has 2N elements, exactly one element must be repeated N times.
 * We can use a hash map to store the frequency of each element and return the element with frequency N.
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