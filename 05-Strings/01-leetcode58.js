//! Approach 1 : By Converting String to Array (Not Good For Interviews) . TC: O(n) and SC: O(n)
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let arr = s.trim().split(" ");
  let n = arr.length;
  let lastWord = arr[n - 1];

  return lastWord.length;
};

//! Approach 2 : Going from Left to right (Backwards) and Using Two Loops . TC: O(n) and SC: O(1)

// Way 1 :
var lengthOfLastWord = function (s) {
  let last = s.length - 1;
  let count = 0;

  // Trim all the spaces from the end of the string
  while (last >= 0) {
    if (s[last] === " ") {
      last--;
    } else {
      break;
    }
  }

  // last is the point where my last word starts, now I will count the length of the last word Till I reach a space .
  while (s[last] !== " " && last >= 0) {
    count++;
    last--;
  }

  return count;
};

// Way 2 :
var lengthOfLastWord = function (s) {
  let last = s.length - 1;
  let count = 0;

  // Trim all the spaces from the end of the string
  while (last >= 0) {
    if (s[last] !== " ") {
      break;
    }
    last--;
  }

  // last is the point where my last word starts, now I will count the length of the last word Till I reach a space .
  while (s[last] !== " " && last >= 0) {
    count++;
    last--;
  }

  return count;
};

//! Approach 3 : Going from Left to right (Backwards) and Using One Loop . TC: O(n) and SC: O(1)

// Way 1 :
var lengthOfLastWord = function (s) {
  let last = s.length - 1;
  let flag = false;
  let count = 0;

  while (last >= 0) {
    if (s[last] === " ") {
      if (flag === false) {
        last--;
      } else {
        break;
      }
    } else {
      count++;
      last--;
      flag = true;
    }
  }

  return count;
};

// Way 2 :

/** 
  - If we found a space and count is 0 => That is Trailing Space .
  - If we found a space and count is > 0 => That is Space After Last Word .(Tab break kr jao)
  - Otherwise decrement the last pointer . 
*/

var lengthOfLastWord = function (s) {
  let last = s.length - 1;
  let flag = false;
  let count = 0;

  while (last >= 0) {
    // This Condition Is Run When there is Non Space Character . 
    if(s[last] !== " ") {
      count++;
    } else if(count > 0) { // This Condition Is Run When there is Space Character and Count is Greater Than 0 .
      break;
    }
    last--;
  }

  return count;
};
