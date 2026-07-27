
var removeStars = function(s) {
    let stack = [];
    let res = ""

    for(let i = 0; i < s.length; i++) {
        if(s[i] === "*") {
            stack.pop();
        } else {
            stack.push(s[i])
        }
    }

    while(stack.length) {
        let last = stack.pop();
        res = last + res;
    }
    return res;
};