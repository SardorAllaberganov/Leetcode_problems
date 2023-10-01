const nums = [-2, -1, -1, 1, 2, 3];

var maximumCount = function (nums) {
	return Math.max(positive(nums), negative(nums));
};

function negative(nums) {
	if (nums[0] >= 0) return 0;
	let start = 0;
	let end = nums.length - 1;
	while (start < end) {
		let mid = Math.ceil((start + end) / 2);
		if (nums[mid] < 0) {
			start = mid;
		} else end = mid - 1;
	}
	return start + 1;
}

function positive(nums) {
	if (nums[nums.length - 1] <= 0) return 0;
	let start = 0;
	let end = nums.length - 1;

	while (start < end) {
		let mid = Math.floor((start + end) / 2);

		if (nums[mid] > 0) {
			end = mid;
		} else start = mid + 1;
	}
	return nums.length - start;
}

console.log(maximumCount(nums));
