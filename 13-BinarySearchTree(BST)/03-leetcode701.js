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
//! My Way ----------------------------------------> Top Down Approach (We are not returning the root node of the tree after insertion)

var insertIntoBST = function (root, val) {
    if (!root) {
        root = new TreeNode(val)
        return root
    }

    let traverse = (curr, prev, pos) => {
        if (!curr) {
            if (pos === "right") {
                prev.right = new TreeNode(val)
            } else {
                prev.left = new TreeNode(val)
            }
            return
        }

        if (curr.val < val) {
            traverse(curr.right, curr, "right")
        } else {
            traverse(curr.left, curr, "left")
        }
    }
    traverse(root, null, null);
    return root;
};

