//! Approach 1 : Using Stack 

/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function (s) {
    let stack = [];
    let ans = ""

    for (let i = 0; i < s.length; i++) {
        if (s[i] !== "]") {
            stack.push(s[i])
        }
        else {
            let res = "";
            while (stack[stack.length - 1] !== "[") {
                let c = stack.pop();
                if (c !== "[" && c !== "]") {
                    res = c + res
                }
            }
            stack.pop();

            //! Making Sure to get the complete digit in case of multiple digits like 10, 100 etc. So we will pop the stack until we get a non-digit character and then convert the digit string to number
            let digit = "";
            while (stack.length && stack[stack.length - 1] >= "0" && stack[stack.length - 1] <= "9") {
                digit = stack.pop() + digit
            }
            digit = Number(digit);

            //! Making copy of res because We need to add this In res multiple times. So we will store the original res in a variable and then add it to res digit-1 times
            let str = res;
            for (let j = 0; j < digit - 1; j++) {
                res = res + str
            }
            stack.push(res);
        }
    }
    while (stack.length) {
        let char = stack.pop();
        ans = char + ans
    }

    return ans

};


