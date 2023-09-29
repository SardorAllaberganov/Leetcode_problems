const ops = ["5", "2", "C", "D", "+"];
// const ops = ["5", "-2", "4", "C", "D", "9", "+", "+"];
// const ops = ["1", "C"];

var calPoints = function (operations) {
    let arr = [];
    for (var i = 0; i < operations.length; i++) {
        if (operations[i] === "C") {
            arr.pop();
        } else if (operations[i] === "D") {
            arr.push(arr[arr.length - 1] * 2);
        } else if (operations[i] === "+") {
            arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
        } else {
            arr.push(+operations[i]);
        }
    }
    return arr.length !== 0 ? arr.reduce((a, b) => a + b) : 0;
};

console.log(calPoints(ops));
