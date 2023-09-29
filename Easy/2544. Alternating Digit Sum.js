const n = 521;
// const n = 111;
// const n = 886996;

var alternateDigitSum = function (n) {
    let result = 0;
    n = n.toString().split("");
    for (let i = 0; i < n.length; i++) {
        if (i % 2 === 0) {
            result += +n[i];
        } else {
            result += +n[i] * -1;
        }
    }
    return result;
};

console.log(alternateDigitSum(n));
