const num = 26;
// const num = -1;

var toHex = function (num) {
    if (num === 0) return "0";
    return num > 0 ? num.toString(16) : (2147483648 * 2 + num).toString(16);
};

console.log(toHex(num));
