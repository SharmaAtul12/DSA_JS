/**
  - Notes : 
  1. Calculating the number of uppercase letters in the word.(uppercase Ascii values are between 65('A') and 90('Z'))
  2. If the number of uppercase letters is equal to the length of the word, then all letters are uppercase.(Ya to sare ho)
  3. If the number of uppercase letters is equal to 0, then all letters are lowercase.(Ya koi bhi na ho)
  4. If the number of uppercase letters is equal to 1 and the first letter is uppercase . (ya sirf phla ho)
*/

var detectCapitalUse = function (word) {
    let upperCaseCount = 0;

    for (let i = 0; i < word.length; i++) {
        let wordValue = word[i].charCodeAt();
        if (wordValue >= 65 && wordValue <= 90) {
            upperCaseCount++;
        }
    }
    
    return upperCaseCount === word.length || upperCaseCount === 0 || 
        (upperCaseCount === 1 && (word[0].charCodeAt() >= 65 && word[0].charCodeAt() <= 90))
};