const n = 1;
// const n = 16;
// const n = 3;

var isPowerOfTwo = function (n) {
    return Math.log2(n) % 1 === 0;
};

console.log(isPowerOfTwo(n));
