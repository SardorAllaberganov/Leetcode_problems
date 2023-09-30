const accounts = [
	[1, 2, 3],
	[3, 2, 1],
];

var maximumWealth = function (accounts) {
	let array = accounts.map((values) =>
		values.reduce((accumulator, currentValue) => accumulator + currentValue)
	);
	return array.sort((a, b) => a - b).reverse()[0];
};

console.log(maximumWealth(accounts));
