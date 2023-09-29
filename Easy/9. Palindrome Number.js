const x = 121;
// const x = -121;
// const x = 10;

var isPalindrome = function (x) {
    var str = x.toString();
    if (str === null) return false;
    return str.split("").reverse().join("") === str;
};

console.log(isPalindrome(x));
