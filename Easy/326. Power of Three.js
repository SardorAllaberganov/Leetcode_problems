const n = 27;
// const n = 0;
// const n = -1;

var isPowerOfThree = function (n) {
    if (n <= 0) return false;
    const ans = parseInt(Math.log(n) / Math.log(3));
    if (n === Math.pow(3, ans)) return true;
    return false;
};

console.log(isPowerOfThree(n));
