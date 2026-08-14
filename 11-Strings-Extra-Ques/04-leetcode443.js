/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
    let readIndex = 0;
    let writeIndex = 0;

    while (readIndex < chars.length) {
        let currChar = chars[readIndex]
        let count = 0;

        //! Count The Number of Occurrences of the Current Character
        while (readIndex < chars.length && currChar === chars[readIndex]) {
            ++count;
            ++readIndex;
        }

        //! Insert The Character
        chars[writeIndex] = currChar;
        writeIndex++;

        //! Insert The Count , also handle the case when count is greater than 1 , we need to insert each digit of the count separately
        if (count > 1) {
            for (let ch of String(count)) {
                chars[writeIndex] = ch;
                writeIndex++;
            }
        }
    }

    //! WriteIndex will be at the end of the compressed string , so we return it as the length of the compressed string
    return writeIndex
};