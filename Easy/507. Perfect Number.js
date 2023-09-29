const num = 28;
// const num = 7;

var checkPerfectNumber = function (num) {
    let nums = [6, 28, 496, 8128, 33550336];
    return nums.includes(num);
};

//another solution
// var checkPerfectNumber = function (num) {
//     let res = 0;
//     for (let i = 1; i <= num / 2; i++) {
//         if (num % i === 0) {
//             res += i;
//         }
//     }
//     if (res === num && res !== 0) return true;
//     return false;
// };

console.log(checkPerfectNumber(num));
