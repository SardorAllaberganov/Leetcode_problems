const s = "Hello World";
// const s = "   fly me   to   the moon  ";
// const s = "luffy is still joyboy";

var lengthOfLastWord = function (s) {
    return s.trim().split(" ").splice(-1)[0].length;
};

console.log(lengthOfLastWord(s));
