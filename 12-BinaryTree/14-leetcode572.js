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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
    let hashRoot = serialize(root);
    let hashSubRoot = serialize(subRoot);
    
    return hashRoot.includes(hashSubRoot);
};

let serialize = (root) => {
    let hash = "";

    //! Pre order traversal Including Null Values
    let traversal = (curr) => {

        //! This is to include null values also and after including null values just return from the function
        if (!curr) {
            hash = hash + "-#";
            return
        }

        hash = hash + "-" + curr.val;
        traversal(curr.left);
        traversal(curr.right);
    }

    traversal(root);
    return hash;
}