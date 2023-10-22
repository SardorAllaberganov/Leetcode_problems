const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6],
	k = 4;

var findKthLargest = function (nums, k) {
	let arr = [];

	while (nums.length > 0) {
		let max = Math.max(...nums);
		arr.push(nums.splice(nums.indexOf(max), 1));
	}
	return arr[k - 1][0];
};

console.log(findKthLargest(nums, k));
