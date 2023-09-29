const s = "abcde",
    goal = "cdeab";
// const s = "abcde",
//     goal = "abced";

var rotateString = function (s, goal) {
    if (s.length !== goal.length) return false;
    return s.concat(s).includes(goal);
};

console.log(rotateString(s, goal));
