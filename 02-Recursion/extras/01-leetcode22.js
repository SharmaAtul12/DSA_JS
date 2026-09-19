/**
 * @param {number} n
 * @return {string[]}
 */

//* At every step, we can either add an open parenthesis or a closed parenthesis. We can only add an open parenthesis if we still 
//* have one left to add (i.e., if the number of open parentheses added so far is less than n). We can only add a closed parenthesis
//*  if it would not exceed the number of open parentheses (i.e., if the number of closed parentheses added so far is less than the
//*  number of open parentheses added so far).

var generateParenthesis = function (n) {
    let res = [];

    let generate = function (curr, open, close) {
        if (curr.length === 2 * n) {
            res.push(curr);
            return;
        }

        if (open < n) {
            generate(curr + "(", open + 1, close)
        }

        if (close < open) {
            generate(curr + ")", open, close + 1)
        }
    }
    generate("", 0, 0);
    return res;
};