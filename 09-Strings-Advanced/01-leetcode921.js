//! Approach 1 : Using Stack

/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function(s) {
    let stack = []

    for(let i = 0; i < s.length; i++) {
        if(s[i] === ")" && stack[stack.length-1] === "(") {
            stack.pop()
        } 
        else {
            stack.push(s[i])
        }
    }

    return stack.length
};


//! Approach 2 : Using Count : TC : O(n) SC : O(1) .. Do Dry Run On "((()" and ")()" you will understand the logic
//! Remeber that we not need to balance string with its own bracket we need to balance it with the help of extra brackets 
//! So That's why we cannot do just openCount++ for opening bracket and openCount-- for closing bracket because 
//! if we have more closing brackets than opening brackets then we need to add extra opening brackets to balance it so 
//! we need to track that how many closing brackets are not balanced so we will use moves variable to track that

var minAddToMakeValid = function (s) {
    let openCount = moves = 0;

    for (let i = 0; i < s.length; i++) {
        if(s[i] === "(") {
            openCount++
        }
        else {
            //! Means Koi Open Bracket Nhi Bacha hh : Ye Nhi ho Payega Balance so to track That this current bracket is not balanced
            //!  we need to add a open bracket so moves++
            if(openCount == 0) {
                moves++;
            } else {
                openCount--
            }
        }

    }
    //! Moves will be the number of closing brackets that are not balanced and openCount will be the number of opening brackets 
    //! that are not balanced (So we need to return the total number of brackets that are not balanced)

    return moves + openCount;
};