/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
//! Recursive Approach -> 
var postorderTraversal = function (root) {
    let ans = [];

    var traversal = (curr) => {
        if (!curr) return;

        traversal(curr.left);
        traversal(curr.right);
        ans.push(curr.val);
    }

    traversal(root);
    return ans;
};

//! Iterative Approach -> Using 2 Stacks
var postorderTraversal = function (root) {
    if(!root) return [];

    let s1 = [root];
    let s2 = [];

    while (s1.length) {
        let curr = s1.pop();
        s2.push(curr);
        curr.left && s1.push(curr.left);
        curr.right && s1.push(curr.right);
    }

    let ans = [];
    while(s2.length) {
        ans.push(s2.pop().val)
    }

    return ans
};

//! Iterative Approach -> Using 1 Stack

var postorderTraversal = function (root) {
    let stack = [];
    let ans = [];
    let curr = root;
    let lastProcessedEle;

    while (stack.length || curr) {
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }

        let peekNode = stack[stack.length - 1]

        if (peekNode.right && peekNode.right !== lastProcessedEle) {
            curr = peekNode.right
        }
        else {
            ans.push(peekNode.val);
            lastProcessedEle = stack.pop();
        }
    }
    return ans;
};


