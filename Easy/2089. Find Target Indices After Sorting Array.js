const nums = [1, 2, 5, 2, 3],
	target = 2;

var targetIndices = function (nums, target) {
	if (!nums.includes(target)) return [];

	let sortedNums = nums.sort((a, b) => a - b);
	let res = [];

	sortedNums.filter((a, index) => {
		if (a === target) {
			res.push(index);
		}
	});
	return res;
};

console.log(targetIndices(nums, target));
