/**
 * @param {number} n
 * @return {number}
 */

/**
 * We need to count the total number of commas when writing all numbers from 1 to n.
  Numbers 1–999 have 0 commas, so we can ignore them.
  Numbers 1,000–999,999 have 1 comma.
  Numbers 1,000,000–999,999,999 have 2 commas, and so on.
  Instead of checking every number, count each entire range at once.
  For each range: number of values × commas per value.
  The range starts (1000 → 1M → 1B...) grow by ×1000, so we only need O(log n) iterations.
  Main DSA idea: group numbers with the same property and process the whole group instead of every element.
 */

var countCommas = function (n) {
    if (n < 1000) return 0;

    let count = 0;
    let commas = 1;
    let start = 1000;

    while(start <= n) {
        let end = start * 1000 - 1;

        let numbers = Math.min(n,end) - start + 1;
        count = count + (numbers * commas);

        start = start * 1000;
        commas++;
    }

    return count;
};