const n = 34,
	k = 6;

var sumBase = function (n, k) {
	return n
		.toString(k)
		.split("")
		.reduce((a, b) => +a + +b);
};

console.log(sumBase(n, k));
