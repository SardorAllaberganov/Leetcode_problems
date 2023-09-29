const haystack = "sadbutsad",
    needle = "sad";
// const haystack = "leetcode", needle = "leeto";

var strStr = function (haystack, needle) {
    return haystack.indexOf(needle);
};

console.log(strStr(haystack, needle));
