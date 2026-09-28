/**
 * @param {string} s
 * @return {number}
 */

/*
{
    "points": [
        "Set the current depth and maximum depth to 0.",
        "Increase the current depth for every opening parenthesis.",
        "For every closing parenthesis, save the current maximum and then decrease the depth.",
        "Return the maximum depth found after checking the whole string."
    ]
}
*/
var maxDepth = function (s) {
    let maxDep = 0;

    let currDep = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            ++currDep;
        }
        else if (s[i] === ")") {
            maxDep = Math.max(maxDep, currDep);
            --currDep;
        }
    }
    return maxDep;
};