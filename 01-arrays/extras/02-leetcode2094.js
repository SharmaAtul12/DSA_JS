/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function (digits) {
    let mapArr = new Array(10).fill(0);

    for (let digit of digits) {
        mapArr[digit]++;
    }

    let ans = [];

    for (let a = 1; a <= 9; a++) {
        if (mapArr[a] === 0) continue;
        mapArr[a]--;

        for (let b = 0; b <= 9; b++) {
            if (mapArr[b] === 0) continue;
            mapArr[b]--;

            for (let c = 0; c <= 8; c += 2) {
                if (mapArr[c] === 0) continue;
                const num = Number(`${a}${b}${c}`);
                ans.push(num);
            }
            mapArr[b]++;
        }
        mapArr[a]++
    }
    return ans;
};