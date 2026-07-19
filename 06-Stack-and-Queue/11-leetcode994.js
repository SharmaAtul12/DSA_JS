/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let m = grid.length;
    let n = grid[0].length;

    let queue = [];

    // First Add all the Rotten Oranges in Queue
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j,0]); // Initially level(or minute) is zero
            }
        }
    }

    let maxMinutes = 0;

    // Mark Adjacent Nodes as rotten and push in queue till it's not empty
    while (queue.length) {
        let [x, y,level] = queue.shift();

        // Top Case : moving up
        if (x > 0 && grid[x - 1][y] === 1) {
            grid[x - 1][y] = 2;
            queue.push([x - 1, y, level+1])
        }

        // Bottom Case : moving down
        if (x < m-1 && grid[x + 1][y] === 1) {
            grid[x + 1][y] = 2;
            queue.push([x + 1, y, level+1])
        }

        // Right Case : moving towards right 
        if (y < n-1 && grid[x][y + 1] === 1) {
            grid[x][y + 1] = 2;
            queue.push([x, y + 1, level+1])
        }

        // Left Case : moving towards right
        if (y > 0 && grid[x][y - 1] === 1) {
            grid[x][y - 1] = 2;
            queue.push([x, y - 1, level+1])
        }

        // Agr Jyda minute (level) mila so update it
        maxMinutes = Math.max(level,maxMinutes)
    }

    // Finally Traverse all the elements and check if any fresh is remaining so return -1 
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 1) {
               return -1;
            }
        }
    }

    // Else return maxMinutes 
    return maxMinutes;
};