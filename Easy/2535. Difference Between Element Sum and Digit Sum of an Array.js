const nums = [1, 15, 6, 3];

var differenceOfSum = function (nums) {
	let num1 = nums.reduce((a, b) => a + b);
	let num2 = nums
		.join("")
		.split("")
		.reduce((a, b) => +a + +b);
	return Math.abs(num1 - num2);
};

console.log(differenceOfSum(nums));
