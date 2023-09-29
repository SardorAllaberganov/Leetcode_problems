const num = 38;
// const num = 0;

var addDigits = function (num) {
    if (isNaN(num) || num === 0) return 0;
    if (num < 10) return num;
    return num % 9 === 0 ? 9 : num % 9;
};

console.log(addDigits(num));
