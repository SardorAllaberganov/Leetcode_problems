const nums = [1, 2, 0];
// const nums = [3,4,-1,1];
// const nums = [7,8,9,11,12];

var firstMissingPositive = function (nums) {
	nums.sort((a, b) => a - b);
	let min = 1;
	nums.map((value) => {
		if (value === min) min++;
		if (value > min) return min;
	});
	return min;
};

console.log(firstMissingPositive(nums));