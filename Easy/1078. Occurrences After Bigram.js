const text = "alice is a good girl she is a good student",
	first = "a",
	second = "good";

// const text = "we will we will rock you",
// 	first = "we",
// 	second = "will";

var findOcurrences = function (text, first, second) {
	return text
		.split(" ")
		.filter(
			(a, index, array) =>
				array[index - 2] === first && array[index - 1] === second
		);
};

console.log(findOcurrences(text, first, second));
