
var lengthOfLongestSubstring = function (arr) {
    let map = {};
    let i = 0;
    let maxWindowSize = 0;

    for (let j = 0; j < arr.length; j++) {
      //! Checking map[arr[j]] != undefined because if the last value of map[arr[j]] is 0 then if(0) will be false and 
      //! we will not enter the if block. So we need to check for undefined instead of falsy value.
        if (map[arr[j]] != undefined && map[arr[j]] >= i) {
            i = map[arr[j]] + 1;
            map[arr[j]] = j
        }
        else {
            map[arr[j]] = j
        }

        let currWindowSize = (j-i) + 1
        maxWindowSize = Math.max(currWindowSize, maxWindowSize)
    }
    
    return maxWindowSize
};

