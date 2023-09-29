const n = "00000000000000000000000000001011";
// const n = 00000000000000000000000010000000;
// const n = 11111111111111111111111111111101;

var hammingWeight = function (n) {
    return n.toString(2).split("0").join("").length;
};

console.log(hammingWeight(n));
