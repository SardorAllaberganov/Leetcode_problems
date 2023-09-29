const n = 4;
// const n = 1;
// const n = 2;

var canWinNim = function (n) {
    if (n % 4 == 0) return false;
    return true;
};

console.log(canWinNim(n));
