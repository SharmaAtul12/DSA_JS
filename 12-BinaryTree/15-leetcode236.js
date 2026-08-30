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
var lowestCommonAncestor = function (root, p, q) {
    let lca = null;

    let check = (curr) => {
        if (!curr) return 0;
        let count = 0;

        let left = check(curr.left);
        let right = check(curr.right);

        if (curr.val === p.val || curr.val === q.val) {
            count++;
        }

        count = count + left + right;

        if (count === 2 && !lca) {
            lca = curr
        };

        return count;

    }

    check(root);
    return lca;
};