/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function(arr, k, x) {
    let l = 0;
    let r = arr.length - 1;

    while(l < r) {
        let mid = l + Math.floor((r - l) / 2);

        if((arr[mid+k] - x) < (x - arr[mid])) {
            l = mid + 1;
        } else {
            r = mid
        }
    }

    return arr.slice(r, r+k)
}; 


//! Without Slice Method 

var findClosestElements = function(arr, k, x) {
    let l = 0;
    let r = arr.length - 1;
    let res = []

    while(l < r) {
        let mid = l + Math.floor((r - l) / 2);

        if((arr[mid+k] - x) < (x - arr[mid])) {
            l = mid + 1;
        } else {
            r = mid
        }
    }

    for(let i = r; i < r + k; i++) {
        res.push(arr[i])
    }

    return res
}; 