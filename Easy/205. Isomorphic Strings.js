const s = "egg",
    t = "add";
// const s = "foo",
//     t = "bar";
// const s = "paper",
//     t = "title";

var isIsomorphic = function (s, t) {
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i], i + 1) !== t.indexOf(t[i], i + 1)) {
            return false;
        }
    }
    return true;
};

console.log(isIsomorphic(s, t));
