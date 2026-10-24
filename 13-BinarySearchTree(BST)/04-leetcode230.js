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
 * @param {number} k
 * @return {number}
 */

/**
 * In this Problem we are given a Binary Search Tree and we have to find the Kth Smallest Element in it.
 * Since it's a BST, we can use the property that an inorder traversal of a BST gives us the elements in sorted order.
 * We will use the inorder traversal to find the Kth smallest element.
 * We will keep a count of the nodes visited and stop when we reach the Kth node.
 */

//! My Approach ------------------------> By Using An Extra Array (Inorder Traversal) .. 

var kthSmallest = function(root, k) {
    let ans = [];

    let traverse = (curr) => {
        curr.left && traverse(curr.left);
        ans.push(curr.val);
        curr.right && traverse(curr.right)
    }
    traverse(root);
    return ans[k-1];
};

//! Sir Approach ------------------------> Without Using An Extra Array (Inorder Traversal) ..

var kthSmallest = function(root, k) {
    let ans = null;
    let count = k;

    let traverse = (curr) => {
        if(ans != null) return;

        curr.left && traverse(curr.left);
        --count;

        if(count == 0) {
            ans = curr.val
        }

        curr.right && traverse(curr.right)
    }
    traverse(root);
    return ans;
};