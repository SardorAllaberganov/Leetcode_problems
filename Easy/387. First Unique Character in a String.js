const s = "leetcode";
// const s = "loveleetcode";
// const s = "aabb";

var firstUniqChar = function (s) {
    s = s.split("");
    let index = s.filter((char) => s.indexOf(char) === s.lastIndexOf(char))[0];
    s.join("");
    return index !== -1 ? s.indexOf(index) : -1;
};

console.log(firstUniqChar(s));
