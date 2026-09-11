/**
 * @param {number[]} digits
 * @return {number}
 */
var totalNumbers = function (digits) {
    let freq = new Array(10).fill(0);

    for (let digit of digits) {
        freq[digit]++;
    }

    let count = 0;

    for (let a = 1; a <= 9; a++) {
        if (freq[a] === 0) continue;
        freq[a]--;

        for (let b = 0; b <= 9; b++) {
            if (freq[b] === 0) continue;
            freq[b]--;

            for (let c = 0; c <= 8; c += 2) {
                if (freq[c] === 0) continue;
                count++;
            }
            freq[b]++;
        }
        freq[a]++
    }

    return count;
};