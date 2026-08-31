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
//! My Approach ------------------------>
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

