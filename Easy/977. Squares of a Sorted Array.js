const nums = [-4, -1, 0, 3, 10];
// const nums = [-7, -3, 2, 3, 11];

var sortedSquares = function (nums) {
	return nums.map((num) => Math.pow(num, 2)).sort((a, b) => a - b);
};

console.log(sortedSquares(nums));
