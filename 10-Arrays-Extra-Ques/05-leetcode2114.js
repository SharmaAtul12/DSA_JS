/**
 * @param {string[]} sentences
 * @return {number}
 */
var mostWordsFound = function(sentences) {
    let maxWords = 0;

    for(let i = 0; i < sentences.length; i++) {
        let n = sentences[i].split(" ").length;
        maxWords = Math.max(n,maxWords)
    }

    return maxWords;
};