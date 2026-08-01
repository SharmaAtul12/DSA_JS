//! Using sliding window technique to find the longest substring with same letters after k replacements ---> With HashMap

var characterReplacement = function (s, k) {
    let map = {};
    //! Because map  starting mm {} empty hoga , so we need to initialize the first character of the string in the map with count 1.
    //! So that vo i = 0 and j = 0 ke liye valid window ban sake, otherwise vo invalid window ban jayega.
    map[s[0]] = 1;
    let i = j = 0;
    let maxWindow = 0;

    //! Using while loop instead of for loop beacause we don't want to increment j in every iteration, we want to increment j only when the window is valid.
    while (j < s.length) {
        if (isWindowValid(map, k)) {
            maxWindow = Math.max(maxWindow, j - i + 1)
            j++;
            map[s[j]] = map[s[j]] ? ++map[s[j]] : 1
        }
        else {
            map[s[i]] = map[s[i]] - 1
            i++;
        }
    }

    return maxWindow
};

var isWindowValid = function (map, k) {
    let totalCount = 0;
    let maxCount = 0;

    //! Because There are only 26 letters in the English alphabet, we can loop through all the letters and check their counts in the map.
    for (let i = 0; i < 26; i++) {
        //! for i = 0 -> i + 65 = 65 -> String.fromCharCode(65) = A
        //! for i = 1 -> i + 65 = 66 -> String.fromCharCode(66) = B
        //! and so on...
        let char = String.fromCharCode(i + 65);

        if (map[char]) {
            totalCount = totalCount + map[char];
            maxCount = Math.max(maxCount, map[char])
        }
    }

    let finalCount = totalCount - maxCount;
    return (finalCount <= k)
}


