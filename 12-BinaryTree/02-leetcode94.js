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
var inorderTraversal = function(root) {
    let ans = [];

    var traversal = (curr) => {
        if(!curr) return;

        //! Inorder Traversal -> Left -> Root -> Right
        traversal(curr.left);
        ans.push(curr.val);
        traversal(curr.right)
    }

    traversal(root);
    return ans;
};

//! Interative Approach -> 
var inorderTraversal = function(root) {
    if(!root) return [];

    let stack = [];
    let ans = [];
    let curr = root;

    while(curr || stack.length) {
        while(curr) {
            stack.push(curr);
            curr = curr.left
        }

        //! Pop the top node from the stack and process it
        curr = stack.pop();
        ans.push(curr.val);
        curr = curr.right;
    }

    return ans
};