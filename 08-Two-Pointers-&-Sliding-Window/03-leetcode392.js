//! Way 1 

var isSubsequence = function (s, t) {
  let i = 0;
  let j = 0;

  while (j < t.length) {
    if (s[i] === t[j]) {
      i++;
      j++;
    } else {
      j++;
    }
  }

  return i === s.length;
};

//! Way 2 

var isSubsequence = function (s, t) {
    let i = 0;
    let j = 0;

    while (j < t.length) {
        if (s[i] === t[j]) {
            i++;
            j++;
        } else {
            j++;
        }

        if (i === s.length) {
            return true
        }
    }
    
    return false

};

//! Way 3

var isSubsequence = function (s, t) {
    let i = 0;
    let j = 0;

    while (j < t.length) {
        if (s[i] === t[j]) {
            i++;
            j++;
        } else {
            j++;
        }

        if (i === s.length) {
            break;
        }
    }
    
    return i === s.length

};