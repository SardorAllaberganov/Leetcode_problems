const n = 5,
	start = 0;

var xorOperation = function (n, start) {
	let nums = [];
	for (let i = 0; i < n; i++) {
		nums[i] = start + 2 * i;
	}
	return nums.reduce((a, b) => a ^ b);
};

console.log(xorOperation(n, start));
