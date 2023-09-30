const n = 2;
// const n = 3;
// const n = 4;

var fib = function (n) {
	return n === 0 || n === 1 ? n : fib(n - 2) + fib(n - 1);
};

console.log(fib(n));
