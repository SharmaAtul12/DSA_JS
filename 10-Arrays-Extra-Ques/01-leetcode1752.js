/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function(arr) {
    let n = arr.length;
    let count = 0;

    for(let i = 1; i < n; i++) {
        if(arr[i-1] > arr[i]) {
            count++;
        }
    }

    //! Ye Pair bhi check krna hh . think arr[n-1] is (i-1) and arr[0] is (i) . 
    //! because ye rotated array hh so ye pair check krna miss nhi kr skte.
    if(arr[n-1] > arr[0]) {
        count++;
    }

    return count <= 1;
};