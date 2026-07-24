//! Approach 1 : 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
    let l = 0;
    let r = nums.length - 1;
    let res = [-1,-1]

    while (l < r) {
        let mid = l + Math.floor((r - l) / 2);

        if (nums[mid] < target) {
            l = mid + 1;
        }
        else {
            r = mid;
        }
    }
    // Kya pata Target ele ho he nhi array mm
    if(nums[r] === target) res[0] = r;

    l = 0;
    r = nums.length - 1;
    while (l < r) {
        let mid = l + Math.ceil((r - l) / 2);

        if (nums[mid] > target) {
            r = mid - 1;
        }
        else {
            l = mid;
        }
    }
    if(nums[r] === target) res[1] = r;
    return res

};

//! Approach 2 :

var searchRange = function (nums, target) {
    let l = 0;
    let r = nums.length - 1;
    let ans = [-1, -1]

    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);

        if (nums[mid] < target) {
            l = mid + 1;
        }
        else if (nums[mid] > target) {
            r = mid - 1
        }
        else {
            ans[0] = mid;
            r = mid - 1;
        }
    }

    l = 0;
    r = nums.length - 1;

    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);

        if (nums[mid] < target) {
            l = mid + 1;
        }
        else if (nums[mid] > target) {
            r = mid - 1
        }
        else {
            ans[1] = mid;
            l = mid + 1;
        }
    }
    return ans
};
