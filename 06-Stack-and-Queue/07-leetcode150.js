/**
 * @param {string[]} tokens
 * @return {number}
 */

//! Way 1 : Using if else statement
var evalRPN = function (tokens) {
    let s = [];

    for (let i = 0; i < tokens.length; i++) {
        if (tokens[i] !== "+" && tokens[i] !== "-" && tokens[i] !== "/" && tokens[i] !== "*") {
            s.push(tokens[i]);
        } else {
            let operand = tokens[i];
            let secondVal = Number(s.pop());
            let firstVal = Number(s.pop());

            if (operand === "+") {
                s.push(firstVal + secondVal)
            } else if (operand === "-") {
                s.push(firstVal - secondVal)
            } else if (operand === "*") {
                s.push(firstVal * secondVal)
            } else {
                s.push(Math.trunc(firstVal / secondVal))
            }
        }
    }
    return Number(s.pop());
};

