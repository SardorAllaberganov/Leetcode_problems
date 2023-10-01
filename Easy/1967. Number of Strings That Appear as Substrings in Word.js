const patterns = ["a", "abc", "bc", "d"],
	word = "abc";

var numOfStrings = function (patterns, word) {
	let count = 0;
	for (let pattern of patterns) {
		if (word.includes(pattern)) count++;
	}
	return count;
};

console.log(numOfStrings(patterns, word));
