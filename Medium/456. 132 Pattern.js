// // const nums = [1, 2, 3, 4];
// // const nums = [3, 1, 4, 2];
// // const nums = [-1, 3, 2, 0];
// // const nums = [1, 0, 1, -4, -3];
// const nums = [3, 5, 0, 3, 4];

// var find132pattern = function (nums) {
// 	let min = Math.min(...nums);
// 	let max = Math.max(...nums);

// 	console.log(min, max);
// 	console.log(nums.indexOf(min), nums.indexOf(max));

// 	if (max === nums[nums.length - 1]) return false;

// 	for (let i = nums.length; i >= 0; i--) {
// 		if (
// 			min < nums[i] &&
// 			max > nums[i] &&
// 			nums.indexOf(min) < i &&
// 			nums.indexOf(max) < i &&
// 			nums.indexOf(min) < nums.indexOf(max)
// 		)
// 			return true;
// 	}
// 	return false;
// };

// console.log(find132pattern(nums));
