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
 * @param {number} targetSum
 * @return {boolean}
 */

//! Top Down Approach -> 
var hasPathSum = function (root, targetSum) {
    if (!root) return false;

    var traverse = (curr, currSum) => {
        //! Maybe the case where the parent have only one child and the other child is null, so we need to check if the current 
        //! node is null or not, if it is null then we return false because we can't go further down the tree.
        if (!curr) return false;

        //! If the current node is not null, we can proceed with the traversal.
        currSum = currSum + curr.val;

        //! For Leaf Node Only
        if (!curr.left && !curr.right) {
            return currSum === targetSum
        }

        return traverse(curr.left, currSum) || traverse(curr.right, currSum);
    }

    return traverse(root, 0)
};

//! Bottom Up Approach ->

var hasPathSum = function (root, targetSum) {
    if (!root) return false;

    if (!root.left && !root.right) {
        return root.val === targetSum
    }

    let leftSubTreeHasPathSum = hasPathSum(root.left, targetSum - root.val);
    let rightSubTreeHasPathSum = hasPathSum(root.right, targetSum - root.val);

    return leftSubTreeHasPathSum || rightSubTreeHasPathSum
};

