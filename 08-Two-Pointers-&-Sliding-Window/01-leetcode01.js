//! Brute Force : TC: O(n^2) SC: O(1)

var twoSum = function (nums, target) {
    let n = nums.length; 

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            let sum = nums[i] + nums[j]
            if (sum === target) {
                return [i, j];
            }
        }
    }
};

//! Using HashMap : TC: O(n) SC: O(n)

var twoSum = function (nums, target) {
    let n = nums.length; 
    let map = {};

    for (let i = 0; i < n; i++) {
        map[nums[i]] = i
    }
    console.log(map)

    for (let i = 0; i < n; i++) {
        let pairToFind = target - nums[i];

        if(i !== map[pairToFind] && map[pairToFind]) {
            return [i, map[pairToFind]]
        }
    }
    
};