const coordinates = "a1";

var squareIsWhite = function (coordinates) {
	let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];
	let nums = ["1", "2", "3", "4", "5", "6", "7", "8"];

	return (
		letters.indexOf(coordinates[0]) % 2 !== nums.indexOf(coordinates[1]) % 2
	);
};

console.log(squareIsWhite(coordinates));
