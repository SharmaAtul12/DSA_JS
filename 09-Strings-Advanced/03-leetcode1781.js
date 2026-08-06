/**
 * @param {string} s
 * @return {number}
 */

/**
 * NOTES ---> 
 * ! 1. 
 * min = 0 is incorrect because every frequency is ≥ 1, so min would never change.
 * !min = Infinity ensures the first non-zero frequency becomes the initial minimum and then it can be updated with 
 * !relevant minimums as we iterate through the frequencies.
 * max starts at 0 because every valid frequency is greater than 0.
 * 
 * ! 2. 
 * freq[x] == 0 means the character does not appear in the current substring.
 * The problem defines beauty using only characters that appear.
 * if (freq[x] > 0) skips characters with frequency 0.
 * !Without this condition, min would become 0, producing incorrect beauty values.
 * 
 * ! 3. Why  let freq = new Array(26).fill(0); this line is inside the outer loop ?
 * Because each value of i represents a new starting substring, so we need a fresh frequency array.
 * i = 0 → all substrings starting at index 0
 * i = 1 → all substrings starting at index 1
 * i = 2 → all substrings starting at index 2
 * Because when i increases, we don't need need to consider the previous starting point . 
 * for ex : "aabcb" , when i = 1 , i don't want i = 0 ("a") because it is not a substring starting at index 1.
 * and if i consider this so the frequency array will be wrong and it will contain the freq["a"] = 3 , which is not correct 
 * because we are only considering the substring starting at index 1.
 */

var beautySum = function (s) {
    let n = s.length;
    let sum = 0;

    for (let i = 0; i < n; i++) {
        let freq = new Array(26).fill(0);
        for (let j = i; j < n; j++) {
            let index = s.charCodeAt(j) - 97;
            ++freq[index];

            let max = 0;
            let min = Infinity;
            for (let x = 0; x < 26; x++) {
                if (freq[x] > 0) {
                    max = Math.max(freq[x], max)
                    min = Math.min(freq[x], min)
                }
            }

            sum = sum + (max - min)
        }
    }
    return sum
};