const num = 7;

var countDigits = function (num) {
	return num
		.toString()
		.split("")
		.reduce((acc, curr) => (num % +curr === 0 ? acc + 1 : acc), 0);
};

console.log(countDigits(num));
