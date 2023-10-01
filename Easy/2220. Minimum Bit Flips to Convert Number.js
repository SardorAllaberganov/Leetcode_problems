const start = 10,
	goal = 7;

var minBitFlips = function (start, goal) {
	return (start ^ goal).toString(2).split("0").join("").length;
};

console.log(minBitFlips(start, goal));
