const digits = [1, 2, 3];
// const digits = [4, 3, 2, 1];
// const digits = [9];

var plusOne = function (digits) {
    digits = digits.join("");
    digits = BigInt(digits) + BigInt(1);
    return digits.toString().split("");
};

console.log(plusOne(digits));
