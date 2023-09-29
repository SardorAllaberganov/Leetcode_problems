const n = 16;
// const n = 5;
// const n = 1;

var isPowerOfFour = function (n) {
    if (n > 1) return isPowerOfFour(n / 4);
    if (n === 1) return true;
    if (n < 1) return false;
};

console.log(isPowerOfFour(n));
