const num1 = 2,
	num2 = 3;

var countOperations = function (num1, num2) {
	let count = 0;
	while (num1 && num2 !== 0) {
		if (num1 < num2) {
			num2 -= num1;
			count++;
		} else if (num1 > num2) {
			count++;
			num1 -= num2;
		} else if (num1 === num2) {
			count++;
			num1 -= num2;
		}
	}
	return count;
};

console.log(countOperations(num1, num2));
