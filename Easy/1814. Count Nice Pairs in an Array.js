const nums = [42, 11, 1, 97];

var countNicePairs = function (nums) {
	let count = 0;
	function rev(num) {
		return +num.toString().split("").reverse().join("");
	}
	for (let i = 0; i < nums.length; i++) {
		for (let j = i + 1; j < nums.length; j++) {
            console.log(nums[i] + rev(nums[j]), nums[j] + rev(nums[i]));
			if (nums[i] + rev(nums[j]) === nums[j] + rev(nums[i])) count++;
		}
	}
	return count;
};

console.log(countNicePairs(nums));
