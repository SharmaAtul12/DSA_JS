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
var zigzagLevelOrder = function (root) {
    if (!root) return [];
    let q = [root];
    let ans = [];
    let move = "right";

    while (q.length) {
        let levelArr = [];
        let levelSize = q.length;

        for (let i = 0; i < levelSize; i++) {
            let curr = q.shift();
            curr.left && q.push(curr.left);
            curr.right && q.push(curr.right);
            levelArr.push(curr.val)
        }

        //! This Will Reverse The Level Array If The Move Is Left and Move is left for (0, 2, 4, 6, ...) and Move is right for (1, 3, 5, 7, ...)
        if(move === "left") {
            levelArr.reverse()
        }
        ans.push(levelArr)
        move = move === "right" ? "left" : "right"
    }

    return ans;
};

//! Way - 02 -> 
var zigzagLevelOrder = function (root) {
    if (!root) return [];
    let q = [root];
    let ans = [];
    let level = 0;

    while (q.length) {
        let levelArr = [];
        let levelSize = q.length;

        for (let i = 0; i < levelSize; i++) {
            let curr = q.shift();
            if(level % 2 === 0) {
                levelArr.push(curr.val)
            } else {
                //! unshift will add the element to the beginning of the array like [1, 2, 3] => unshift(0) => [0, 1, 2, 3]
                //! This will reverse the order of the elements in the array for odd levels
                levelArr.unshift(curr.val); 
            }
            curr.left && q.push(curr.left);
            curr.right && q.push(curr.right);
        }
        ans.push(levelArr)
        level++
    }

    return ans;
};