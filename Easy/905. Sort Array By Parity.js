const nums = [3, 1, 2, 4];
// const nums = [0];

var sortArrayByParity = function (nums) {
	const result = [];

	for (const num of nums) {
		if (num % 2 === 0) {
			result.unshift(num);
		} else {
			result.push(num);
		}
	}

	return result;
};

console.log(sortArrayByParity(nums));
