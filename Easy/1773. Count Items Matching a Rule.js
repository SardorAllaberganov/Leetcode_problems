const items = [
		["phone", "blue", "pixel"],
		["computer", "silver", "lenovo"],
		["phone", "gold", "iphone"],
	],
	ruleKey = "color",
	ruleValue = "silver";

var countMatches = function (items, ruleKey, ruleValue) {
	let count = 0;
	let indexes = {
		type: 0,
		color: 1,
		name: 2,
	};
	for (let item of items) {
		if (item[indexes[ruleKey]] === ruleValue) count++;
	}
	return count;
};

console.log(countMatches(items, ruleKey, ruleValue));
