const nums = [1, 2, 3, 4];
// const nums = [1, 1, 1, 1, 1];
// const nums = [3, 1, 2, 10, 1];

var runningSum = function (nums) {
	let sum = 0;
	return nums.map((a) => (sum += a));
};

console.log(runningSum(nums));
