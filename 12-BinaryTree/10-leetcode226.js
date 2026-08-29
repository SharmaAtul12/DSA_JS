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
 * @return {TreeNode}
 */
var invertTree = function(root) {
   if(!root) return root;

   let invert = (curr) => {
        let temp = curr.right;
        curr.right = curr.left;
        curr.left = temp;

        curr.left && invert(curr.left);
        curr.right && invert(curr.right);
   }

   invert(root);
   return root;
};