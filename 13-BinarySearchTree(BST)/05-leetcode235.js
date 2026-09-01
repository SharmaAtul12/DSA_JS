/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

/**
 * Since the problem guarantees p and q exist, root cannot become null before finding their LCA.
 * Therefore, if (!root) return; is unnecessary for this specific problem.
 * In the worst case, a skewed BST has height n - 1 edges, but the LCA is guaranteed to be encountered.
 * So your simplified recursive solution is correct and sufficient.
 */

var lowestCommonAncestor = function(root, p, q) {
    //! if(!root) return; This we dont need because the problem guarantees that p and q exist in the BST, 
    //! so root will never be null before finding their LCA.

    if(p.val < root.val && q.val < root.val) {
        return lowestCommonAncestor(root.left,p,q)
    }
    else if (p.val > root.val && q.val > root.val) {
        return lowestCommonAncestor(root.right,p,q)
    }
    else {
        return root;
    }
};