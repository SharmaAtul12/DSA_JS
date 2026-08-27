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
 * @return {number[][]}
 */
var levelOrderBottom = function (root) {
    if (!root) return [];
    let q = [root];
    let ans = [];

    while (q.length) {
        let levelArr = [];
        let levelSize = q.length;

        for (let i = 0; i < levelSize; i++) {
            let curr = q.shift();
            curr.left && q.push(curr.left);
            curr.right && q.push(curr.right);
            levelArr.push(curr.val)
        }

        ans.push(levelArr)
    }

    //! This Qustion Is Same As Level Order Traversal (Leetcode 102) , But The Only Difference Is That We Need To Return The Answer In Reverse Order .
    return ans.reverse();
};