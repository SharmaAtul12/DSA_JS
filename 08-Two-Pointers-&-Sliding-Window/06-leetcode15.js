/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// TC : O(n*n) 
var threeSum = function (nums) {
    // 1. Sort the Array
    nums.sort((a, b) => a - b);
    let ans = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[i - 1]) {
            twoSum(nums, i, ans)
        }
    }

    return ans;
};

var twoSum = function (arr, x, ans) {
    let i = x + 1;
    let j = arr.length - 1;
 
    while (i < j) {
        let sum = arr[i] + arr[j] + arr[x];

        if (sum === 0) {
            ans.push([arr[i], arr[j], arr[x]]);
            i++;j--;

            while(i < j && arr[i] == arr[i-1]) i++; // To Prevent Duplicate Left Values
            while(i < j && arr[j] == arr[j+1]) j--; // To Prevent Duplicate Right Values
        }
        else if (sum > 0) {
            j--;
            while(i < j && arr[j] == arr[j+1]) j--; // This is Optional Just for Little Optimization
        }
        else {
            i++
            while(i < j && arr[i] == arr[i-1]) i++; // This is Optional Just for Little Optimization
        }
    }
};