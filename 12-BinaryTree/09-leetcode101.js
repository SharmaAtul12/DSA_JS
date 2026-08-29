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
 * @return {boolean}
 */
var isSymmetric = function (root) {

    let isMirror = (left,right) => {
        //! Leaf node hh and !left && !right means both left and right are null, so it's symmetric
        if(!left && !right) return true;

        //! If one of them is null, then it's not symmetric because any value and null are not equal
        if(!left || !right) return false;

        return left.val === right.val && 
            isMirror(left.left,right.right) &&
            isMirror(left.right, right.left)
    }
    
    return isMirror(root.left,root.right)
};