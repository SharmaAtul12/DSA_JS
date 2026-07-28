//! Approach 1 : TC O(n) SC O(n) because we are using a hash map to store the values and their indices

var twoSum = function(arr, target) {
    let map = {}

    for(let i = 0; i < arr.length; i++) {
        map[arr[i]] = i + 1;
    }

    for(let i = 0; i < arr.length; i++) {
        let pairToFind = target - arr[i];

        if(i+1 !== map[pairToFind] && map[pairToFind]) {
            return [i+1, map[pairToFind]]
        }
    }

};

//! Approach 2 : TC O(n) SC O(1) because we are using two pointers to find the pair

var twoSum = function(arr, target) {
    let i = 0;
    let j = arr.length - 1;

    while(i < j) {
        let sum = arr[i] + arr[j];

        if(sum === target) {
            return [i+1, j+1]
        } 
        else if(sum > target) {
            j--;
        } 
        else {
            i++;
        }
    }
};