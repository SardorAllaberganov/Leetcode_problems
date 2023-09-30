const low = 3,
	high = 7;

var countOdds = function (low, high) {
	return Math.floor((high + 1) / 2) - Math.floor(low / 2);
};

console.log(countOdds(low, high));
