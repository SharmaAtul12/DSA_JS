/**
 * @param {number[]} nums
 * @return {number}
 */

var digitSum = function (num) {
    let sum = 0;
    while (num > 0) {
        sum = sum + (num % 10);
        num = Math.floor(num / 10)
    }
    return sum;
}

var smallestIndex = function (nums) {
    let ans = -1;

    for (let i = 0; i < nums.length; i++) {
        if (i === digitSum(nums[i])) {
            ans = i;
            break;
        }
    }

    return ans;
};