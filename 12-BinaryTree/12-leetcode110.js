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
var isBalanced = function (root) {

    let height = (curr) => {
        if (!curr) return 0;

        let leftHeight = height(curr.left);
        let rightHeight = height(curr.right);

        //! Agr Kisi bhi leftsubtree ya rightsubtree nn -1 return kiya h means unbalanced h 
        //! so ab hi -1 ko Upar tak Propaagate kro, kyuki agr ek subtree unbalanced h to tree bhi unbalanced h
        if(leftHeight === -1 || rightHeight === -1) return -1;
        
        //! Jha pp bhi Aisa h, to iska matlab ki tree balanced nahi h, so return -1
        if(Math.abs(leftHeight - rightHeight) > 1) return -1;

        return Math.max(leftHeight,rightHeight) + 1;

    }

    // return height(root) !== -1; OR 
    let res = height(root)
    if(res === -1) return false;
    return true;
};