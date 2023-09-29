const s = "abc",
    t = "ahbgdc";
// const s = "axc", t = "ahbgdc";

var isSubsequence = function (s, t) {
    const a = new RegExp([...s].join(".*"));
    return a.test(t);
};

console.log(isSubsequence(s, t));
