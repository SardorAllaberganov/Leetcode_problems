const s = "Let's take LeetCode contest";
// const s = "God Ding";

var reverseWords = function (s) {
    return s
        .split(" ")
        .map((a) => a.split("").reverse().join(""))
        .join(" ");
};

console.log(reverseWords(s));
