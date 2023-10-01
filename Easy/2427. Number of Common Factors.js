const a = 12,
	b = 6;

var commonFactors = function (a, b) {
	let maxLength = Math.max(a, b);
	let counter = 0;
	for (let i = 1; i <= maxLength; i++) {
		if (a % i === 0 && b % i === 0) {
			counter++;
		}
	}
	return counter;
};

console.log(commonFactors(a, b));
