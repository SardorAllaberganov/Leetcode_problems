const num = 2932;

var minimumSum = function (num) {
	num = num
		.toString()
		.split("")
		.sort((a, b) => a - b);
	return parseInt(num[0] + num[2]) + parseInt(num[1] + num[3]);
};

console.log(minimumSum(num));
