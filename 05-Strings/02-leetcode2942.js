// 1. Using map function .

/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */

// TC : O(n * m)  and SC : O(1) Because we are not using any extra space In our Algorithm To find the answer . 
// it is just a constant space used for the array to store the indexes of the words containing the character x.

var findWordsContaining = function(words, x) {
    let arr = [];

    words.map((word, index) => {
        if(word.includes(x)) {
            arr.push(index)
        } 
    });

    console.log(arr);
    return arr;
};

// 2. Using for loop .

var findWordsContaining = function(words, x) {
    let arr = [];

    for(let i = 0; i < words.length; i++) {
        if(words[i].includes(x)) {
            arr.push(i)
        }
    }
    return arr;
};


// 3. without includes method .

var findWordsContaining = function(words, x) {
    let arr = [];

    for(let i = 0; i < words.length; i++) {
        for(let j = 0; j < words[i].length; j++) {
            if(words[i][j] === x) {
                arr.push(i);
                break;
            }
        }
    }
    return arr;
};