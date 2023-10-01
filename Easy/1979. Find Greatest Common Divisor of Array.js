const nums = [2, 5, 6, 9, 10];

var findGCD = function (nums) {
	let max = Math.max(...nums);
	let min = Math.min(...nums);

	for (let i = max; i > 0; i--) {
		if (max % i === 0 && min % i === 0) {
			return i;
		}
	}
};
console.log(findGCD(nums));
