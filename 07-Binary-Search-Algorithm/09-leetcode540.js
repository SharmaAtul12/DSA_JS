/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(arr) {
    let l = 0;
    let r = arr.length - 1;

    while(l <= r ) {
        let mid = l + Math.floor((r - l)/ 2);

        //! Pair is On Left Side : 
        if(arr[mid] === arr[mid - 1]) {
            // Checking Odd or Even
            if((mid-1-l) % 2 !== 0) {
                r = mid - 2
            } else {
                l = mid + 1
            }
        } //! Means Pair Exist On right hand side 
        else if (arr[mid] === arr[mid + 1]) {
            // Checking Odd or Even
            if((r-mid+1) % 2 !== 0) {
                l = mid + 2
            } else {
                r = mid - 1
            }
        }
        //! Single Element 
        else {
            return arr[mid];
        }
    }
};