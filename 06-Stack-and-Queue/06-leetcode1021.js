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
