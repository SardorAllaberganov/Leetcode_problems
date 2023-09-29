const x = 1,
    y = 4;
// const x = 3, y = 1;

var hammingDistance = function (x, y) {
    return ((x ^ y).toString(2).match(/1/g) || "").length;
};

console.log(hammingDistance(x, y));
