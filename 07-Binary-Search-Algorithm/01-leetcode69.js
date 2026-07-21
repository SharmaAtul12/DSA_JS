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