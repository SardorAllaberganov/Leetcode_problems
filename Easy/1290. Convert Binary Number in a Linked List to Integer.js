const head = [1, 0, 1];

var getDecimalValue = function (head) {
	let string = "";
	while (head !== null) {
		string += head.val;
		head = head.next;
	}
	return parseInt(string, 2);
};

console.log(getDecimalValue(head));
