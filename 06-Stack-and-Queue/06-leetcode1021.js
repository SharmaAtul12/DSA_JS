//! Approach 1 : Using Stack -- TC: O(n) and SC: O(n)

var removeOuterParentheses = function (s) {
    let stack = [];
    let result = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            stack.push(s[i]);
            if (stack.length > 1) {
                result += s[i]
            }
        } else {
            if(stack.length > 1) {
                result += s[i]
            }
            stack.pop()
        }
    }
    return result;
};

//! Approach 2 : Without Using Stack  TC: O(n) and SC: O(1)

var removeOuterParentheses = function (s) {
    let level = 0;
    let result = "";

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(") {
            level++;
            if (level > 1) {
                result += s[i]
            }
        } else {
            if(level > 1) {
                result += s[i]
            }
            level--
        }
    }
    return result;
};