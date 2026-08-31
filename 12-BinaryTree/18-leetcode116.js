/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
//! My Approach ------------------------> (Iterative Method)
var connect = function (root) {
    if (!root) return root;
    let q = [root];

    while (q.length) {
        let levelSize = q.length;

        for (let i = 0; i < levelSize; i++) {
            let first = q.shift();

            if (i < levelSize - 1) {
                first.next = q[0]
            }

            first.left && q.push(first.left);
            first.right && q.push(first.right)
        }
    }
    return root;
};

//! Sir's Approach ---------------------> (Recursive Method)
// Recursive Method -> 
var connect = function (root) {
    if (!root) return root;

    let traverse = (curr) => {

        //! Taki leaf node kk liye dikkt na ho .. 
        if (curr.left) {
            curr.left.next = curr.right;
        }
        //! For making the connection bw two childs of diff parent like (5 -> 6)
        if (curr.right && curr.next) {
            curr.right.next = curr.next.left
        }

        curr.left && traverse(curr.left);
        curr.right && traverse(curr.right)
    }

    traverse(root);
    return root;
};