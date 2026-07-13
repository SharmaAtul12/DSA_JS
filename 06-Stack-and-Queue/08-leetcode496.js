/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let map = {};
    let stack = [];
    let ans = [];

    // For the Last Element 
    let n = nums2.length;
    stack.push(nums2[n - 1]);
    map[nums2[n - 1]] = -1;

    for (let i = n - 2; i >= 0; i--) {
        let top = stack[stack.length - 1];
        if (nums2[i] < top) {
            map[nums2[i]] = top;
            stack.push(nums2[i])
        } else {
            while (stack.length) {
                if (stack[stack.length - 1] < nums2[i]) {
                    stack.pop()
                } else {
                    map[nums2[i]] = stack[stack.length - 1];
                    break;
                }
            }
            if (stack.length === 0) {
                map[nums2[i]] = -1;
            }
            stack.push(nums2[i]);
        }
    }

    for (let j = 0; j < nums1.length; j++) {
        ans.push(map[nums1[j]])
    }

    return ans;
};