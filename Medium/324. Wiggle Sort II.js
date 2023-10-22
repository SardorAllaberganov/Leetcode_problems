const nums = [1, 5, 1, 1, 6, 4];

var wiggleSort = function (nums) {
	let sortedNums = nums.sort((a, b) => a - b);
	nums = [];
	for (let i = 0; i < sortedNums.length / 2; i++) {
		nums.push(sortedNums[i]);
		nums.push(sortedNums[sortedNums.length - 1 - i]);
	}
	return nums;
};

console.log(wiggleSort(nums));
