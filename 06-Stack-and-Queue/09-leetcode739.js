// Way - 01

/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (arr) {
    let stack = [];

    // For Last Element
    let n = arr.length;
    let ans = Array(n).fill(0);
    stack.push(n - 1);
    ans[n - 1] = 0;

    for (let i = n - 2; i >= 0; i--) {
        let top = stack[stack.length - 1];
        if (arr[i] < arr[top]) {
            ans[i] = top - i;
        } else {
            while (stack.length) {
                if (arr[i] < arr[stack[stack.length - 1]]) {
                    break;
                } else {
                    stack.pop()
                }
            }
            if (stack.length === 0) {
                ans[i] = 0;
            } else {
                ans[i] = stack[stack.length - 1]- i;
            }
        }
        stack.push(i)
    }
    return ans;

};

// Way - 02 (Improved Code)

var dailyTemperatures = function (arr) {
    let stack = [];

    // For Last Element
    let n = arr.length;
    let ans = Array(n).fill(0);
    stack.push(n - 1);
    ans[n - 1] = 0;

    for (let i = n - 2; i >= 0; i--) {
        while (stack.length) {
            let top = stack[stack.length - 1];
            if (arr[i] < arr[top]) {
                ans[i] = top - i;
                break;
            } else {
                stack.pop()
            }
        }
        // This Condition is Even not need . as our arr is already filled with 0.
        // if (stack.length === 0) {
        //     ans[i] = 0;
        // }
        stack.push(i)
    }
    return ans;

};
