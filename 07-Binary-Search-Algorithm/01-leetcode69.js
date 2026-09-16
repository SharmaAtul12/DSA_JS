/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x < 2) return x;

    let l = 2;
    let r = Math.floor(x / 2);

    while (l <= r) {
        let mid = Math.floor((l + r) / 2);

        if (x === mid ** 2) {
            return mid;
        }
        else if (x < mid ** 2) {
            r = mid - 1;
        }
        else {
            l = mid + 1;
        }
    }

    //! Because right is the closest integer to the square root of x, we return r.
    return r;
};

//! Approach 2 : With Best Practice of Finding the middle element

var mySqrt = function (x) {
    if (x < 2) return x;

    let l = 2;
    let r = Math.floor(x / 2);

    while (l <= r) {
        let mid = Math.floor(l + (r - l) / 2);

        if (x === mid ** 2) {
            return mid;
        }
        else if (x < mid ** 2) {
            r = mid - 1;
        }
        else {
            l = mid + 1;
        }
    }
    return r;
};

//! Now Leetcode has added restriction check , so we don't have to use ** . so we are doing mid * mid instead of mid ** 2

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x < 2) return x;

    let l = 2;
    let r = Math.floor(x/2);

    while(l <= r) {
        let mid = l + Math.floor((r - l)/ 2);

        if(x === mid * mid) {
            return mid
        }
        else if(x < mid * mid) {
            r = mid - 1
        }
        else {
            l = mid + 1
        }
    }
    //* If x is not a perfect square, r is the largest valid number whose square <= x.
    //* Since the answer needs to be rounded down, return r.
    return r;
};