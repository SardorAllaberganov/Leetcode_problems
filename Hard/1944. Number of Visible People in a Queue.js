const heights = [10, 6, 8, 5, 11, 9];
// const heights = [5, 1, 2, 3, 10];

var canSeePersonsCount = function (heights) {
	const arr = [];
	for (let i = 0; i < heights.length; i++) {
		const current = heights[i];
		let count = 0;
		let max = 0;
		for (let j = i + 1; j < heights.length; j++) {
			if (heights[j] > max) {
				max = heights[j];
				count++;
			}
			if (current < heights[j]) {
				break;
			}
		}
		arr.push(count);
	}
	return arr;
};
