const grid = [
	[4, 3, 2, -1],
	[3, 2, 1, -1],
	[1, 1, -1, -2],
	[-1, -1, -2, -3],
];

var countNegatives = function (grid) {
	let count = 0;
	for (let g of grid) {
		count += g.filter((a) => a < 0).length;
	}
	return count;
};

console.log(countNegatives(grid));
