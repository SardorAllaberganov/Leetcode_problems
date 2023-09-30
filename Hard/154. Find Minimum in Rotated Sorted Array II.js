const nums = [1, 3, 5];
// const nums = [2,2,2,0,1];

var findMin = function (nums) {
	return Math.min(...nums);
};

console.log(findMin(nums));
