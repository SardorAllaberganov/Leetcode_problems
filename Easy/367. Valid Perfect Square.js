const num = 16;
// const num = 14;

var isPerfectSquare = function (num) {
    if (num < 0 || isNaN(num)) {
        return NaN;
    }

    let square_root = num / 2;
    let temp = 0;
    while (square_root != temp) {
        temp = square_root;
        square_root = (num / square_root + square_root) / 2;
    }
    if (Number.isInteger(square_root)) return true;
    return false;
};

console.log(isPerfectSquare(num));
