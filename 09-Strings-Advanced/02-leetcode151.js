/**
 * @param {string} s
 * @return {string}
 */

//! Without Using BuiltIn Methods Except Trim : -> 

var reverseWords = function (s) {
    //* Ye + " " is isliye add kiya hai taki last word ko bhi push kar sake array me
    s = s.trim() + " "
    let wordArr = []
    let word = ""

    //! Split Logic : -> String To Array
    for (let c of s) {
        if (c != " ") {
            word = word + c
        }
        else {
            if (word.length) {
                wordArr.push(word)
            }
            word = ""
        }
    }

    //! Reversing The Array : ->
    let n = Math.floor(wordArr.length / 2);
    for (let i = 0; i < n; i++) {
        let temp = wordArr[i];
        wordArr[i] = wordArr[wordArr.length - 1 - i];
        wordArr[wordArr.length - 1 - i] = temp;
    }

    //! Join Logic : Array -> String
    let finalRevStr = ""
    for(let i = 0; i < wordArr.length; i++) {
        if(i > 0) {
            finalRevStr = finalRevStr + " " +  wordArr[i] //! Baaki Words ke Aage Space Add Kar Diya
        }
        else {
            finalRevStr = finalRevStr + wordArr[i]; //! First Word ko Directly Add Kar Diya
        }
    }

    return finalRevStr
};

