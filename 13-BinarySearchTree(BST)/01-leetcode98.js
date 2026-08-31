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

/**
 * Top-down: low and high constraints are passed from parent → child.
   Bottom-up: isLeftBST and isRightBST results return from child → parent.
   The parent combines both child results using isLeftBST && isRightBST.
   Therefore, BST validation uses top-down constraints + bottom-up result combination.
 */

var isValidBST = function (root) {
  let isBST = (curr, low, high) => {
    if (!curr) return true;

    //! Before going to my children, I'll check whether I myself am allowed to exist within these boundaries
    if ((low != null && curr.val <= low) || (high != null && curr.val >= high))
      return false;

    let isLeftBST = isBST(curr.left, low, curr.val);
    let isRightBST = isBST(curr.right, curr.val, high);

    return isLeftBST && isRightBST;
  };

  return isBST(root, null, null);
};
