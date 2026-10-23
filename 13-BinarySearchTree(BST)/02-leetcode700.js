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
 * @param {number} val
 * @return {TreeNode}
 */

/**
 * In this Problem we are given a Binary Search Tree and a value. 
 * We have to find the node in the BST which has the same value as the given value. 
 * If we find the node then we have to return that node otherwise we have to return null.
 */

//! Iterative Approach ->

var searchBST = function (root, val) {

    while (true) {
        if (!root || root.val === val) {
            return root
        }

        if (root.val > val) {
            root = root.left
        }
        else if (root.val < val) {
            root = root.right
        }
    }
};

//! Recursive Approach -> Top-down

var searchBST = function (root, val) {
    let ans = null;
    let traversal = (curr) => {
        if(curr.val === val) {
            ans = curr;
            return; //! Writing return here is important because we don't want to traverse further once we found the node.
        }
        else {
            if(curr.val < val) {
                curr.right && traversal(curr.right)
            } 
            else {
                curr.left && traversal(curr.left)
            }
        }
    }
    traversal(root);
    return ans;
};

//! Recursive Approach -> Bottom-up

var searchBST = function (root, val) {
    if(!root || root.val === val) return root;

    return root.val < val ? searchBST(root.right,val) : searchBST(root.left,val)
};