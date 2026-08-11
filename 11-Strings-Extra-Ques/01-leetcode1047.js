/**
 * @param {string} s
 * @return {string}
 */
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