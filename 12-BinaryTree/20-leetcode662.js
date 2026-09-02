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

/**
 * Normalization — 10-line summary 🧠
 * 1. We assign each node an index to preserve the gaps between nodes.
 * 2. Normally, child indices are 2 * index and 2 * index + 1.
 * 3. In a very deep tree, these indices grow extremely fast: 0 → 1 → 3 → 7 → 15 → ....
 * 4. Very large indices can exceed JavaScript's safe integer precision.
 * 5. So we normalize the indices at every level.
 *    - We take the first node's index as firstIndex.
 *    - For every node, we calculate: normalizedIndex = index - firstIndex.
 *    - Therefore, the first node of every level always becomes 0.
 *    - Example: indices [100, 103, 107] become [0, 3, 7] — gaps stay exactly the same.
 *    - Thus, we get the same width, but with small, safe numbers that don't grow uncontrollably.
 */

var widthOfBinaryTree = function (root) {
    let q = [[root, 0]];
    let maxWidth = 0;

    while (q.length) {
        let levelSize = q.length;

        let firstIndex = q[0][1];

        let leftChildPos = q[0][1];
        let rightChildPos = q[levelSize - 1][1];
        let currLevelWidth = rightChildPos - leftChildPos + 1;
        maxWidth = Math.max(maxWidth, currLevelWidth);

        for (let i = 0; i < levelSize; i++) {
            let [curr, index] = q.shift();

            index = index - firstIndex;

            if (curr.left) {
                q.push([curr.left, 2 * index])
            }

            if (curr.right) {
                q.push([curr.right, 2 * index + 1])
            }
        }

    }
    return maxWidth;
};