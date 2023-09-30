const n = 234;

var subtractProductAndSum = function (n) {
	n = n.toString().split("");
	return n.reduce((a, b) => +a * +b) - n.reduce((a, b) => +a + +b);
};

console.log(subtractProductAndSum(n));
