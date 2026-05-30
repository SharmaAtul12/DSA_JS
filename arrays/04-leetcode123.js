
// BRUTE FORCE => O(n^2) time complexity

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const profits = [];
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            let profit = prices[j] - prices[i];
            profits.push(profit);

        }
    }
    const maxVal = Math.max(...profits);
    if (maxVal > 0) {
        return maxVal;
    } else {
        return 0;
    }
};

// OPTIMIZED => O(n) time complexity

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const profits = [];
    let min = prices[0];
    let maxProfit = 0;

    for(let i = 1; i < prices.length; i++) {
        // Updating MaxProfit : minValue ss subtract krkr he maxProfit milega
        if(prices[i]-min > maxProfit) {
            maxProfit = prices[i]-min;
        }
        // Updating Min Value : Agr min ss kam hh so that is the Minimum value 
        if(prices[i] < min) {
            min = prices[i];
        }
    }

    return maxProfit;
};