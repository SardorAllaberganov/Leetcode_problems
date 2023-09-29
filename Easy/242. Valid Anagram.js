const s = "anagram",
    t = "nagaram";
// const s = "rat",
//     t = "car";

var isAnagram = function (s, t) {
    s = s.split("").sort().join("");
    t = t.split("").sort().join("");
    if (s === t) return true;
    return false;
};

console.log(isAnagram(s, t));
