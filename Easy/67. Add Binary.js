const a = "11",
    b = "1";
// const a = "1010",
//     b = "1011";

var addBinary = function (a, b) {
    return (BigInt("0b" + a) + BigInt("0b" + b)).toString(2);
};

console.log(addBinary(a, b));
