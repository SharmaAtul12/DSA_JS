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
//! Way - 1 (check current node then check left and right subtrees)
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

//! Way - 2 (check left and right subtrees then check the current node)
var isValidBST = function (root) {

    let traversal = (curr, low, high) => {
        if (!curr) return true;

        let left = traversal(curr.left, low, curr.val)
        let right = traversal(curr.right, curr.val, high)

        let currRes = true;
        if (low != null && curr.val <= low || high != null && curr.val >= high) {
            currRes = false;
        } else {
            currRes = true;
        }

        return left && right && currRes;

    }

    return traversal(root, null, null)
};
