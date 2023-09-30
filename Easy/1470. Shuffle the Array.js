const nums = [2, 5, 1, 3, 4, 7],
	n = 3;

var shuffle = function (nums, n) {
	let x = nums.slice(0, n);
	let y = nums.slice(-n);
	let arr = [];
	for (let i = 0; i < nums.length / 2; i++) {
		arr.push(x[i]);
		arr.push(y[i]);
	}
	return arr;
};

console.log(shuffle(nums, n));
