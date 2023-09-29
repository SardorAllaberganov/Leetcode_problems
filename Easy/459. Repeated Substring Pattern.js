const s = "abab";
// const s = "aba";
// const s = "abcabcabcabc";

var repeatedSubstringPattern = function (s) {
    return s.repeat(2).slice(1, -1).includes(s);
};

console.log(repeatedSubstringPattern(s));
