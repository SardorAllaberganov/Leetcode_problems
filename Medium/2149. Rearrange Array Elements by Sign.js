// const nums = [3, 1, -2, -5, 2, -4];
const nums = [-1, 1];

var rearrangeArray = function (nums) {
	let arr = [];
	let i = 0,
		j = 1;

	nums.forEach((x) => {
		if (x > 0) {
			arr[i] = x;
			i += 2;
		} else {
			arr[j] = x;
			j += 2;
		}
	});
    
	return arr;
};

console.log(rearrangeArray(nums));
