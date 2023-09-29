const num1 = "11",
    num2 = "123";
// const num1 = "456",
//     num2 = "77";
// const num1 = "0",
//     num2 = "0";

var addStrings = function (num1, num2) {
    return eval(BigInt(num1) + BigInt(num2)).toString();
};

console.log(addStrings(num1, num2));
