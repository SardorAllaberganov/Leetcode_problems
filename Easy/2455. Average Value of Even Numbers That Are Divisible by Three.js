const nums = [1, 3, 6, 10, 12, 15];

var averageValue = function (nums) {
	let count = 0;
	let sum = 0;
	for (let num of nums) {
		if (num % 6 === 0) {
			sum += num;
			count++;
		}
	}
	return count === 0 ? 0 : Math.floor(sum / count);
};

console.log(averageValue(nums));
