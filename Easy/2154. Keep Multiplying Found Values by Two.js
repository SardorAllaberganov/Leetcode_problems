const nums = [5, 3, 6, 1, 12],
	original = 3;

var findFinalValue = function (nums, original) {
	let set = new Set(nums);
	while (set.has(original)) original *= 2;
	return original;
};

console.log(findFinalValue(nums, original));
