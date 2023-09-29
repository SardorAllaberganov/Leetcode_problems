const n = 2;
// const n = 3;

var climbStairs = function (n, memo = { 1: 1, 2: 2 }) {
    if (memo[n] !== undefined) return memo[n];
    memo[n] = climbStairs(n - 2, memo) + climbStairs(n - 1, memo);
    return memo[n];
};

console.log(climbStairs(n));
