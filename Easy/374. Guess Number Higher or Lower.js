const n = 10,
    pick = 6;
// const n = 1, pick = 1;
// const n = 2, pick = 1;

var guessNumber = function (n) {
    let start = 0;
    let end = n;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);

        if (guess(mid) == 0) {
            return mid;
        } else if (guess(mid) == -1) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }
};

console.log(guessNumber(n, pick));
