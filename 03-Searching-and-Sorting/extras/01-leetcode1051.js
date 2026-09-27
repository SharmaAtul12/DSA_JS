/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
    let n = heights.length;
    //* Yha pp Koi bhi sorting algorithm use kar sakte ho (Best is Merge Sort with O(nlogn) time complexity)
    let expected = [...heights].sort((a,b) => a - b);

    let count = 0;
    for(let i = 0; i < n; i++) {
        if(heights[i] !== expected[i]) {
            count++;
        }
    }
    return count;
};