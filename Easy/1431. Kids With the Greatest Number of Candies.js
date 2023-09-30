const candies = [2, 3, 5, 1, 3],
	extraCandies = 3;

var kidsWithCandies = function (candies, extraCandies) {
	let maxNumber = Math.max.apply(0, candies);
	let array = [];
	for (const candy of candies) {
		if (maxNumber > candy + extraCandies) {
			array.push(false);
		} else {
			array.push(true);
		}
	}
	return array;
};

console.log(kidsWithCandies(candies, extraCandies));
