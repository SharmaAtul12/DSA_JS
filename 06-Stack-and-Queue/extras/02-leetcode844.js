/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
    let s1 = [];
    let t1 = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "#") {
            s1.pop()
        }
        else {
            s1.push(s[i])
        }
    }

    for (let i = 0; i < t.length; i++) {
        if (t[i] === "#") {
            t1.pop()
        }
        else {
            t1.push(t[i])
        }
    }

    if (s1.length !== t1.length) return false;
    return JSON.stringify(s1) === JSON.stringify(t1);

};