const x = 4;
// const x = 8;

var mySqrt = function (x) {
    if (x < 2) return x;
    let start = 1;
    let end = x;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (mid * mid <= x && (mid + 1) * (mid + 1) > x) return mid;
        else if (mid * mid > x) end = mid - 1;
        else start = mid + 1;
    }
};

console.log(mySqrt(x));
