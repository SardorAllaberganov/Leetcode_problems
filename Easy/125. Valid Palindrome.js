const s = "A man, a plan, a canal: Panama";
// const s = "race a car";
// const s = " ";

var isPalindrome = function (s) {
    const str = s
        .replace(/[^a-zA-Z0-9 ]/g, "")
        .toLowerCase()
        .split(" ")
        .join("");

    const strReversed = str.split("").reverse().join("");

    if (s === " " || (s.includes(".") && s.length < 2) || str === strReversed)
        return true;
    return false;
};

console.log(isPalindrome(s));
