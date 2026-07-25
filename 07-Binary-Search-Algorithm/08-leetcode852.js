//! My Approach =>

var peakIndexInMountainArray = function(arr) {
    let l = 0;
    let r = arr.length - 1;

    while(l < r) {
        let mid = l + Math.ceil((r - l)/ 2);

        if(arr[mid] > arr[mid - 1]) {
            l = mid
        } else {
            r = mid - 1
        }
    }
    
    return r
};



