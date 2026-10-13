/**
 * @param {string} s
 * @return {string}
 */

//* In this problem, we are given a string s and we have to remove all adjacent duplicates in the string. We can use a stack 
//* to keep track of the characters in the string. If the current character is the same as the top character of the stack, 
//* we pop the top character from the stack. Otherwise, we push the current character onto the stack. 
//* Finally, we concatenate all characters in the stack to form the result string.

var removeDuplicates = function(s) {
    let stack = [];
    let res = "";

    for(let i = 0; i < s.length; i++) {
        let top = stack.length - 1
        
        if(!stack[top] || stack[top] !== s[i]) {
            stack.push(s[i])
        }
        else {
            stack.pop()
        }
    }
    
    for(let i = 0; i < stack.length; i++) {
        res = res + stack[i]
    }

    return res
};