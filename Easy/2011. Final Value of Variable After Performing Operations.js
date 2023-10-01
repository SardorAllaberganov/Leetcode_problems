const operations = ["--X", "X++", "X++"];

var finalValueAfterOperations = function (operations) {
	let X = 0;
	for (const operation of operations) {
		eval(operation);
	}
	return X;
};

console.log(finalValueAfterOperations(operations));
