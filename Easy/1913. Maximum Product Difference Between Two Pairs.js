const nums = [5, 6, 2, 7, 4];

var maxProductDifference = function (nums) {
	nums = nums.sort((a, b) => a - b);
	return nums[nums.length - 1] * nums[nums.length - 2] - nums[0] * nums[1];
};

console.log(maxProductDifference(nums));
