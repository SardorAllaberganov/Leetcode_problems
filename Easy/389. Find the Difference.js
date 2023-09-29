const s = "abcd",
    t = "abcde";
// const s = "", t = "y";

var findTheDifference = function (s, t) {
    for (let item of s) {
        t = t.replace(item, "");
    }
    return t;
};

console.log(findTheDifference(s, t));
