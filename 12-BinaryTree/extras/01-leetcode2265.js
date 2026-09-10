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
 * @return {number}
 */
var averageOfSubtree = function (root) {
    let ans = 0;

    var traversal = function (curr) {
        if (!curr.left && !curr.right) {
            ans++;
            return [curr.val, 1]
        }

        let leftTree = curr.left && traversal(curr.left);
        let rightTree = curr.right && traversal(curr.right);

        let total = (leftTree?.[1] || 0) + (rightTree?.[1] || 0) + 1;
        let totalSum = (leftTree?.[0] || 0) + (rightTree?.[0] || 0) + curr.val;

        let average = Math.floor(totalSum / total);

        if (average === curr.val) {
            ans++;
        }

        return [totalSum, total]
    }

    traversal(root);
    return ans;
};

//! Clean Way -> 

var averageOfSubtree = function (root) {
    let ans = 0;

    var traversal = function (curr) {
        if (!curr.left && !curr.right) {
            ans++;
            return [curr.val, 1]
        }

        let leftTree = curr.left ? traversal(curr.left) : [0, 0];
        let rightTree = curr.right ? traversal(curr.right) : [0, 0];

        let total = leftTree[1] + rightTree[1] + 1;
        let totalSum = leftTree[0] + rightTree[0] + curr.val;

        let average = Math.floor(totalSum / total);

        if (average === curr.val) {
            ans++;
        }

        return [totalSum, total]
    }

    traversal(root);
    return ans;
};