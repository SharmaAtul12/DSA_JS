/**
 * @param {string[]} sentences
 * @return {number}
 */

//! Using Split Method -> 

var mostWordsFound = function(sentences) {
    let maxWords = 0;

    for(let i = 0; i < sentences.length; i++) {
        let n = sentences[i].split(" ").length;
        maxWords = Math.max(n,maxWords)
    }

    return maxWords;
};

//! Without Using Split Method -> 
var mostWordsFound = function(sentences) {
    let maxWords = 0;

    for(let i = 0; i < sentences.length; i++) {
        let words = 0;
        for(ch of sentences[i]) {
            if(ch === " ") {
                words++;
            }
        }
        words++; // For the Last Word
        maxWords = Math.max(words,maxWords)
    }

    return maxWords;
};