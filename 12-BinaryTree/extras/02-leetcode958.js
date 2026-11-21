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
var isCompleteTree = function(root) {
    let q = [root];
    let seenNull = false;

    while(q.length) {
        let curr = q.shift();

        if(curr === null) {
            seenNull = true;
        }
        else {
          //* If we have seen a null node and the current node is not null, the tree is not complete
            if(seenNull === true) {
                return false
            }
            q.push(curr.left);
            q.push(curr.right);
        }
    }

    //* And agr we have traversed the entire tree and not found any violations of the complete tree property, we can conclude that the tree is complete
    return true;
};