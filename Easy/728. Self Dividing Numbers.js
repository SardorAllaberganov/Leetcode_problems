const left = 1,
    right = 22;
// const left = 47, right = 85;

var selfDividingNumbers = function (left, right) {
    let arr = [];
    for (let i = left; i <= right; i++) {
        i
            .toString()
            .split("")
            .every((num) => +num && !(i % num)) && arr.push(i);
    }
    return arr;
};

console.log(selfDividingNumbers(left, right));
