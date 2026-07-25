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

//! Sir Approach =>

var peakIndexInMountainArray = function(arr) {
    let l = 0;
    let r = arr.length - 1;

    while(l < r) {
        let mid = l + Math.floor((r - l)/ 2);

        if(arr[mid + 1] > arr[mid]) {
            l = mid + 1
        } else {
            r = mid
        }
    }
    
    return r
};

