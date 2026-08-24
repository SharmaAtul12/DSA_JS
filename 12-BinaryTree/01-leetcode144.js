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
var preorderTraversal = function(root) {
    let ans = [];

    var traversal = (curr) => {
        if(!curr) return;

        //! Preorder Traversal -> Root -> Left -> Right
        ans.push(curr.val);
        traversal(curr.left);
        traversal(curr.right)
    } 

    traversal(root);
    return ans;
};

//! Iterative Approach -> 
var preorderTraversal = function(root) {
    if(!root) return [];
    
    let ans = [];
    let stack = [];
    stack.push(root);

    //! In this approach, we are using stack to store the nodes and then pop them one by one and push their right and 
    //! left children to the stack. This way we can traverse the tree in preorder fashion.
    while(stack.length) {
        let curr = stack.pop();
        ans.push(curr.val);
        curr.right && stack.push(curr.right);
        curr.left && stack.push(curr.left);
    }

    return ans;
};