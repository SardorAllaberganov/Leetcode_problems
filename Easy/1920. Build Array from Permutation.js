const nums = [0, 2, 1, 5, 3, 4];

var buildArray = function (nums) {
	let res = [];
	for (let i = 0; i < nums.length; i++) {
		res.push(nums[nums[i]]);
	}
	return res;
};

console.log(buildArray(nums));
