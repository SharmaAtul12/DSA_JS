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
var levelOrder = function(root) {
    if(!root) return [];
    let q = [root];
    let ans = [];

    while(q.length) {
        let levelArr = [];
        let levelSize = q.length; //! This is Very Important , Because current queue size is the number of nodes in the current level .

        //! This Will Process All The Nodes In The Current Level
        for(let i = 0; i < levelSize; i++) {
            let curr = q.shift();
            curr.left && q.push(curr.left);
            curr.right && q.push(curr.right);
            levelArr.push(curr.val)
        }

        ans.push(levelArr)
    }

    return ans;
};