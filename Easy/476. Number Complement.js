const num = 5;
// const num = 1;

var findComplement = function (num) {
    return parseInt(
        num
            .toString(2)
            .split("")
            .map((a) => (a === "1" ? "0" : "1"))
            .join(""),
        2
    );
};

console.log(findComplement(num));
