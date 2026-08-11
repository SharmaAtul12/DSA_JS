/**
 * @param {number[]} nums
 * @return {number}
 */
var firstUniqueEven = function (nums) {
    let evenArr = [];
    let map = {}

    //! In this Loop : evenArr mm sabhi even number push ho rhe hai (with same order in nums) aur map mm unka count store ho rha hai
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            if (map[nums[i]]) {
                ++map[nums[i]]
            }
            else {
                map[nums[i]] = 1
            }
            evenArr.push(nums[i])
        }
    }

    //! And Yha pp Check Kiya Jis bhi evenElement ka count 1 hai voh first unique even number hoga
    for (let i = 0; i < evenArr.length; i++) {
        if (map[evenArr[i]] === 1) {
            return evenArr[i]
        }
    }
    return -1
};