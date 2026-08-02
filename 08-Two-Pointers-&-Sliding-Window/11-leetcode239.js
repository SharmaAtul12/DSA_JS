/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(arr , k) {
    let i = j = 0;
    let q = [];
    let res = [];

    while(j < arr.length) {
      //! Why ? Because we want to maintain the decreasing order in the queue so that the first element of the queue is always the maximum of the current window.
        while(q.length && arr[j] > q[q.length-1]) {
            q.pop()
        }
        q.push(arr[j]);

        //! Window Complete : Now Time To Push Max of this window in the result Array
        if(j >= k - 1) {
            res.push(q[0]);

            //! Corner Case : Before moving i -> check if it match with q[0] so shift()
            if(q[0] === arr[i]) {
                q.shift()
            }
            i++;
        }
        j++;
    }
    
    return res;
};